"use client";

import { EditWindow, Sidebar } from "@/fsd/shared";
import classes from "./page.module.scss";
import { formulas, MathFieldDynamic } from "@/fsd/entities";
import { useState } from "react";

export default function CalculationPage() {
  const [formula, setFormula] = useState("");

  return (
    <div className={classes.wrapper}>
      <Sidebar items={formulas} level={0} callback={setFormula} />
      <div className={classes.mathfield}>
        <MathFieldDynamic formula={formula} />
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
    </div>
  );
}
