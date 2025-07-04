"use client";

import Link from "next/link";
import classes from "./layout.module.scss";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { EditWindow } from "@/fsd/shared";

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
        <Link
          href="/charts"
          className={`${classes.tab} ${
            pathname === "/charts" ? classes.active : ""
          }`}
        >
          Графики
        </Link>
        {
          <Link href="/formulas" className={classes.tab}>
            Схемы
          </Link>
        }
        <Link href="/formulas" className={classes.tab}>
          Поставить задачу
        </Link>
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
        <div className={classes.rollingForce}>
          <div className={classes.box}>
            <label htmlFor="">Классический расчет</label>
            <input type="radio" id="1" />
          </div>
          <div className={classes.box}>
            <label htmlFor="">Учет натяжения</label>
            <input type="radio" id="1" />
          </div>
          <div className={classes.box}>
            <label htmlFor="">Учет упругого сплющивания</label>
            <input type="radio" id="2" />
          </div>
          <div className={classes.box}>
            <label htmlFor="">Учет внеконтактной деформации</label>
            <input type="radio" id="2" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
