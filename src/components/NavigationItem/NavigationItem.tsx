import React from "react";
import PersonIcon from "@components/ui/PresonIcon";
import s from "./NavigationItem.module.scss";

export default function NavigationItem() {
  return (
    <div className={s.navigation}>
      <PersonIcon className={s.navigation_icon} />
      MenuItem
      <span className={s.navigation_number}>123</span>
    </div>
  );
}
