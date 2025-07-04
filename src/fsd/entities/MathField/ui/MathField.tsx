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
  latexDefault,
}: {
  formula?: string;
  setAllFormulas?: Dispatch<SetStateAction<SidebarItemsType>>;
  latexDefault?: string;
}) {
  const mathRef = useRef<MathfieldElement>(null);
  const isAllowAnalyse = useRef(false);

  useCustomPlaceholder(
    "{\\Large\\text{Начните вводить выражения...}}",
    mathRef
  );

  function analyseMath(
    e: FormEvent<MathfieldElement> | { currentTarget: MathfieldElement }
  ) {
    if (!isAllowAnalyse.current) return;
    const mathField = mathRef.current;
    if (!mathField) return;

    const oldSelection = mathField.selection;

    const latex = e.currentTarget.getValue();

    console.log(latex);

    ce.forget(undefined);

    let formattedLatex = Latex.toggleDispLines(latex, false);
    const exprs = formattedLatex.split(/(\\\\|\\quad)/);
    const recalcExprs = exprs.map((expr) => {
      if (expr.includes("=")) {
        let left = expr.split("=")[0];
        left = left.replace(
          /(\\operatorname\{[^{}]+\})|(?<!\\)\b([a-zA-Z]{2,})\b/g,
          (match, isWrapped, unwrappedWord) =>
            isWrapped ? match : `\\operatorname{${unwrappedWord}}`
        );
        const recalc = ce.parse(left).N();
        const right = recalc.isValid ? recalc.latex : "";
        return left + "=" + right;
      } else if (expr.includes("\\coloneq")) {
        let [lhsRaw, rhsRaw] = expr.split("\\coloneq").map((s) => s.trim());
        const rhs = ce.parse(rhsRaw).evaluate();

        let symbolName: string;
        let subscript: string | null = null;

        const subscriptMatch = lhsRaw.match(/^([^_]+)_([^{]+)$/);
        if (subscriptMatch) {
          symbolName = subscriptMatch[1];
          subscript = subscriptMatch[2];
        } else if (lhsRaw.includes("_{")) {
          const parts = lhsRaw.split("_{");
          symbolName = parts[0];
          subscript = parts[1].replace("}", "");
        } else {
          symbolName = lhsRaw;
          ce.parse(`\\operatorname{${lhsRaw}}\\coloneq ${rhs}`).evaluate();
          return expr;
        }

        const fullSymbolName = subscript
          ? `${symbolName}_${subscript}`
          : symbolName;

        ce.defineSymbol(fullSymbolName, {
          value: rhs,
        });
        return expr;
      } else {
        ce.parse(expr).evaluate();
        return expr;
      }
    });

    const newLatex = Latex.toggleDispLines(recalcExprs.join(""), true);

    mathField.setValue(newLatex, {
      silenceNotifications: true,
    });

    const deltaSelection = newLatex.length - latex.length;
    const newStart = Math.max(0, oldSelection.ranges[0][0] + deltaSelection);
    const newEnd = Math.max(0, oldSelection.ranges[0][1] + deltaSelection);

    mathField.selection = {
      ranges: [[newStart, newEnd]],
      direction: oldSelection.direction ?? "none",
    };

    console.log(mathField.getValue());
    /* updateFormulas(); */
  }

  function insertFormula() {
    if (!formula) return;
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
    if (!setAllFormulas) return;

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

    /* if (mathField) {
      analyseMath({ currentTarget: mathField! });
    } */

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

  const template =
    "b:= \\quad R:= \\quad \\Delta h:=" +
    " \\\\ " +
    "F_к\\coloneq b\\sqrt{R\\Delta h}" +
    " \\\\ " +
    "P:=" +
    " \\\\ " +
    "p_{ср}\\coloneq\\frac{P}{F_к}";

  return (
    <math-field
      className={classes.mathfield}
      ref={mathRef}
      math-mode-space="\quad"
      /* onInput={analyseMath} */
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {Latex.toggleDispLines(template, true)}
      {/* {latexDefault} */}
    </math-field>
  );
}
