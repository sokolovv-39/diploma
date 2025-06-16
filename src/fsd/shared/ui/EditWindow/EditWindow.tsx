import { CSSProperties } from "react";
import classes from "./EditWindow.module.scss";

type Props = {
  title: string;
  desc: string;
  styles: {
    backgroundColor: CSSProperties["color"];
    textColor: CSSProperties["color"];
  };
};

export function EditWindow({ title, desc, styles }: Props) {
  return (
    <div
      className={classes.wrapper}
      style={{
        backgroundColor: styles.backgroundColor,
        color: styles.textColor,
      }}
    >
      <h1>{title}</h1>
      <h1>{desc}</h1>
    </div>
  );
}
