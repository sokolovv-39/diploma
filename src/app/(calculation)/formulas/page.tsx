"use client";

import { EditWindow, Latex, Sidebar } from "@/fsd/shared";
import classes from "./page.module.scss";
import { formulas, MathFieldDynamic } from "@/fsd/entities";
import { useState } from "react";
import "mathlive/fonts.css";
import "mathlive";

export default function FormulasPage() {
  const [formula, setFormula] = useState("");
  const [hoverFormula, setHoverFormula] = useState("");
  const [allFormulas, setAllFormulas] = useState(formulas);

  return (
    <div className={classes.wrapper}>
      <Sidebar
        items={allFormulas}
        level={0}
        callback={setFormula}
        hoverCallback={setHoverFormula}
      />
      <div className={classes.mathfield}>
        <MathFieldDynamic formula={formula} setAllFormulas={setAllFormulas} />
      </div>
      <div className={classes.windows}>
        <EditWindow
          title="Мой расчет 1"
          desc=""
          styles={{ backgroundColor: "#d9d9d9", textColor: "#000000" }}
        />
        <EditWindow
          title="Сталь"
          desc="12Х18Н9Т"
          styles={{ backgroundColor: "#1313F4", textColor: "#FFFFFF" }}
        />
      </div>
      {hoverFormula && (
        <math-field read-only className={classes.hintMathfield}>
          {Latex.toggleDispLines(hoverFormula, true)}
        </math-field>
      )}
    </div>
  );
}
