"use client";

import { CSSProperties, useState } from "react";
import { SidebarItemsType } from "../../model";
import classes from "./Sidebar.module.scss";
import { CaretSVG } from "@/assets/CaretSVG";

type CallbackFnType = React.Dispatch<React.SetStateAction<string>>;

type SidebarProps = {
  items: SidebarItemsType;
  level: number;
  callback: CallbackFnType;
};

export function Sidebar({ items, level, callback }: SidebarProps) {
  return (
    <div className={classes.wrapper}>
      <SidebarDropdown items={items} level={level} callback={callback} />
    </div>
  );
}

function SidebarDropdown({ items, level = 0, callback }: SidebarProps) {
  const styles: CSSProperties = {
    gap: level === 0 ? "20px" : "10px",
    marginTop: level === 0 ? "" : "10px",
  };

  return (
    <ul
      style={{
        paddingLeft: level * 16,
        ...styles,
      }}
      className={classes.ul}
    >
      {items.map((el, i) => (
        <DropdownItem key={i} item={el} level={level} callback={callback} />
      ))}
    </ul>
  );
}

function DropdownItem({
  item,
  level,
  callback,
}: {
  item: SidebarItemsType[number];
  level: number;
  callback: CallbackFnType;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className={classes.li}>
      <div
        className={classes.text}
        onClick={() => {
          if (item.nested) setIsOpen(!isOpen);
          else callback(item.latex);
        }}
      >
        {item.text}
        {item.nested ? (
          <CaretSVG direction={isOpen ? "bottom" : "right"} />
        ) : null}
      </div>
      {item.nested && isOpen && (
        <SidebarDropdown
          items={item.nested}
          level={level + 1}
          callback={callback}
        />
      )}
    </li>
  );
}
