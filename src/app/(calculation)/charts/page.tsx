import Image from "next/image";
import classes from "./page.module.scss";

export default function Charts() {
  return (
    <div className={classes.wrapper}>
      <Image src="/chart.png" alt="" width={750} height={450} />
    </div>
  );
}
