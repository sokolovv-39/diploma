"use client";

import "mathlive/fonts.css";
import "mathlive";
import { MathfieldElement } from "mathlive";
import "@cortex-js/compute-engine";
import { Dispatch, FormEvent, SetStateAction, useEffect, useRef } from "react";
import { ComputeEngine } from "@cortex-js/compute-engine";
import { Latex } from "../../../shared/lib";
import classes from "./MathField.module.scss";
import { getUninitSyms, useCustomPlaceholder } from "../lib";
import { formulas } from "../model";
import { SidebarItemsType } from "@/fsd/shared";

MathfieldElement.soundsDirectory = "/sounds/";
MathfieldElement.decimalSeparator = ",";
const ce = new ComputeEngine();

export function MathField({
  formula,
  setAllFormulas,
}: {
  formula: string;
  setAllFormulas: Dispatch<SetStateAction<SidebarItemsType>>;
}) {
  const mathRef = useRef<MathfieldElement>(null);
  const isAllowAnalyse = useRef(false);
  useCustomPlaceholder("{\\huge\\text{Начните вводить выражения...}}", mathRef);

  function analyseMath(e: FormEvent<MathfieldElement>) {
    if (!isAllowAnalyse.current) return;

    if (!mathRef.current) return;
    const latex = e.currentTarget.getValue();

    ce.forget(undefined);

    const formattedLatex = Latex.toggleDispLines(latex, false);
    const exprs = formattedLatex.split(/(\\\\|\\quad)/);
    const recalcExprs = exprs.map((expr) => {
      if (expr.includes("=")) {
        let left = expr.split("=")[0];
        const recalc = ce.parse(left).N();
        return left + "=" + recalc.value;
      } else if (expr.includes("\\coloneq")) {
        const [lhsRaw, rhsRaw] = expr.split("\\coloneq").map((s) => s.trim());
        const lhsExpr = ce.parse(lhsRaw);
        if (lhsExpr.symbol == null) {
          throw new Error(`Невозможно извлечь имя символа из ${lhsRaw}`);
        }
        const rhs = ce.parse(rhsRaw).evaluate();
        ce.defineSymbol(lhsExpr.symbol, {
          value: rhs,
        });
        return expr;
      } else {
        ce.parse(expr).evaluate();
        return expr;
      }
    });

    const newLatex = Latex.toggleDispLines(recalcExprs.join(""), true);

    mathRef.current.setValue(newLatex, {
      silenceNotifications: true,
    });
    /* updateFormulas(); */
  }

  function insertFormula() {
    const mathField = mathRef.current;

    if (!mathField) return;
    mathField.focus();
    mathField.dispatchEvent(new FocusEvent("focus"));

    const uninitialized = getUninitSyms(ce, formula);

    const latex =
      uninitialized
        .map((sym) => {
          return Latex.symAssign(sym);
        })
        .filter(Boolean)
        .join("\\quad ") +
      " \\\\ " +
      formula;

    let newLatex = `${Latex.toggleDispLines(
      mathField.getValue(),
      false
    )} \\\\ ${latex}`;
    newLatex = Latex.toggleDispLines(newLatex, true);

    mathField.setValue(newLatex, {
      silenceNotifications: true,
    });
  }

  function updateFormulas() {
    const newFormulas = formulas.slice(0, 3).map((el) => {
      if (!el.latex) return el;
      return {
        ...el,
        isCalcAvail: !getUninitSyms(ce, el.latex).length,
      };
    });

    setAllFormulas(newFormulas);
  }

  useEffect(() => {
    if (formula) insertFormula();
  }, [formula]);

  useEffect(() => {
    const mathField = mathRef.current;

    function onBeforeInput(e: InputEvent) {
      if (e.inputType === "deleteContentBackward")
        isAllowAnalyse.current = false;
      else isAllowAnalyse.current = true;
    }

    mathField?.addEventListener("beforeinput", onBeforeInput);

    return () => {
      mathField?.removeEventListener("beforeinput", onBeforeInput);
    };
  }, []);

  return (
    <math-field
      className={classes.mathfield}
      ref={mathRef}
      math-mode-space="\quad"
      onInput={analyseMath}
      style={{
        width: "100%",
        height: "100%",
      }}
    ></math-field>
  );
}
