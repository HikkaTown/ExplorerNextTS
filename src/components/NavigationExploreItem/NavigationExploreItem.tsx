import React from "react";
import cs from "classnames";
import SmallArrowIcon from "@components/ui/SmallArrowIcon";
import s from "./NavigationExploreItem.module.scss";
import YellowFolderIcon from "@components/ui/YellowFolderIcon";
import { INavigationExploreItem } from "src/interfaces";

export default function NavigationExploreItem({
  isOpen,
  onClick,
}: INavigationExploreItem) {
  return (
    <div className={s.navigation_exlopre} onClick={onClick}>
      <div className={s.navigation_btn}>
        <SmallArrowIcon
          className={cs(
            s.navigation_arrow,
            isOpen ? s.navigation_arrow_open : ""
          )}
        />
        <YellowFolderIcon className={s.navigation_folder} />
        <span className={s.navigation_name}>FolderName</span>
      </div>
    </div>
  );
}
