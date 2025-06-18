import { MathFieldDynamic, rollingForceTemplate } from "@/fsd/entities";
import { Latex } from "@/fsd/shared";
import classes from "./page.module.scss";

export default function RollingForcePage() {
  return (
    <MathFieldDynamic
      latexDefault={Latex.toggleDispLines(rollingForceTemplate, true)}
    />
  );
}
