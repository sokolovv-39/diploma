import { MathFieldDynamic, rollingForceTemplate } from "@/fsd/entities";
import { Latex } from "@/fsd/shared";
import classes from "./page.module.scss";

export default function RollingForcePage() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.mathfield}>
        <MathFieldDynamic
          latexDefault={Latex.toggleDispLines(rollingForceTemplate, true)}
        />
      </div>
      <button>Добавить проход</button>
    </div>
  );
}
