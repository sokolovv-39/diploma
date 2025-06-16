import { MISIS_Logo } from "@/fsd/shared";
import classes from "./Header.module.scss";
import Link from "next/link";
import { LoginStatus } from "@/fsd/features";

export function Header() {
  return (
    <header className={classes.header}>
      <MISIS_Logo />
      <nav className={classes.menu}>
        <Link href="" className={classes.link}>
          О проекте
        </Link>
        <Link href="" className={classes.link}>
          Помощь
        </Link>
        <Link href="" className={classes.link}>
          Контакты
        </Link>
        <Link href="" className={classes.link}>
          Пользовательское соглашение
        </Link>
        <Link href="" className={classes.link}>
          Разработчики
        </Link>
      </nav>
      <div className={classes.login}>
        <LoginStatus />
      </div>
    </header>
  );
}
