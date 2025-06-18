"use client";

import Link from "next/link";
import classes from "./layout.module.scss";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function CalculationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className={classes.wrapper}>
      <div className={classes.menu}>
        <Link
          href="/formulas"
          className={`${classes.tab} ${
            pathname === "/formulas" ? classes.active : ""
          }`}
        >
          Формульный расчет
        </Link>
        <Link
          href="/rolling-force"
          className={`${classes.tab} ${
            pathname === "/rolling-force" ? classes.active : ""
          }`}
        >
          Расчет усилия прокатки
        </Link>
        <Link href="/formulas" className={classes.tab}>
          Расчет предела текучести
        </Link>
        <Link href="/formulas" className={classes.tab}>
          Графики
        </Link>
        <Link href="/formulas" className={classes.tab}>
          Схемы
        </Link>
        <Link href="/formulas" className={classes.tab}>
          Поставить задачу
        </Link>
      </div>
      {children}
    </div>
  );
}
