"use client";

import "mathlive/fonts.css";
import "mathlive";
import { MathfieldElement } from "mathlive";
import "@cortex-js/compute-engine";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ComputeEngine } from "@cortex-js/compute-engine";
import { Latex } from "../../../shared/lib";
import classes from "./MathField.module.scss";
import { useCustomPlaceholder } from "../lib";

MathfieldElement.soundsDirectory = "/sounds/";
MathfieldElement.decimalSeparator = ",";
const ce = new ComputeEngine();

export function MathField({ formula }: { formula: string }) {
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
      if (!expr.includes(":=") && expr.includes("=")) {
        const left = expr.split("=")[0];
        const recalc = ce.parse(left).N();
        return left + "=" + recalc.value;
      } else {
        ce.parse(expr).evaluate();
        return expr;
      }
    });

    const newLatex = Latex.toggleDispLines(recalcExprs.join(""), true);

    mathRef.current.setValue(newLatex, {
      silenceNotifications: true,
    });
  }

  function insertFormula() {
    const mathField = mathRef.current;

    if (!mathField) return;
    mathField.focus();
    mathField.dispatchEvent(new FocusEvent("focus"));
    const boxedFormula = ce.parse(formula.split(":=")[1]);
    const symbols = boxedFormula.symbols;

    const uninitialized = [];

    for (const sym of symbols) {
      if (!ce.lookupSymbol(sym)?.value) uninitialized.push(sym);
    }

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

    console.log(newLatex);

    mathField.setValue(newLatex, {
      silenceNotifications: true,
    });
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
