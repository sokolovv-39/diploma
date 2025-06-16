import classes from "./layout.module.scss";

export default function CalculationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.menu}>
        <button>Формульный расчет</button>
        <button>Подбор прокатного стана</button>
        <button>Расчет предела текучести</button>
        <button>Графики</button>
        <button>Схемы</button>
        <button>Поставить задачу</button>
      </div>
      {children}
    </div>
  );
}
