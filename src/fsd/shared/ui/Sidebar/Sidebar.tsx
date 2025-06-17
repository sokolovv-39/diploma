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
  hoverCallback: CallbackFnType;
};

export function Sidebar({
  items,
  level,
  callback,
  hoverCallback,
}: SidebarProps) {
  return (
    <div className={classes.wrapper}>
      <SidebarDropdown
        items={items}
        level={level}
        callback={callback}
        hoverCallback={hoverCallback}
      />
    </div>
  );
}

function SidebarDropdown({
  items,
  level = 0,
  callback,
  hoverCallback,
}: SidebarProps) {
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
        <DropdownItem
          key={i}
          item={el}
          level={level}
          callback={callback}
          hoverCallback={hoverCallback}
        />
      ))}
    </ul>
  );
}

const DropdownItem = ({
  item,
  level,
  callback,
  hoverCallback,
}: {
  item: SidebarItemsType[number];
  level: number;
  callback: CallbackFnType;
  hoverCallback: CallbackFnType;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className={classes.li}>
      <div
        className={classes.text}
        onClick={() => {
          if (item.nested) setIsOpen(!isOpen);
          else callback(item.latex);
        }}
        onMouseEnter={() => {
          if (item.latex) hoverCallback(item.latex);
        }}
        onMouseLeave={() => hoverCallback("")}
      >
        {item.text}
        {item.nested ? (
          <CaretSVG direction={isOpen ? "bottom" : "right"} />
        ) : null}
        {item.isCalcAvail && 1}
      </div>
      {item.nested && isOpen && (
        <SidebarDropdown
          hoverCallback={hoverCallback}
          items={item.nested}
          level={level + 1}
          callback={callback}
        />
      )}
    </li>
  );
};
