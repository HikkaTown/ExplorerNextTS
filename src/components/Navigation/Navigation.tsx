import NavigationExploreItem from "@components/NavigationExploreItem";
import NavigationItem from "@components/NavigationItem";
import TypeFileBlock from "@components/TypeFileBlock";
import React, { useState } from "react";
import { IFilesProps } from "src/interfaces";
import s from "./Navigation.module.scss";

export default function Navigation({ data }: IFilesProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={s.navigation}>
      <NavigationExploreItem isOpen={isOpen} onClick={handleIsOpen} />
      {isOpen ? (
        <>
          <NavigationItem />
          <ul className={s.navigation_container}>
            <TypeFileBlock data={data} />
          </ul>
        </>
      ) : null}
    </div>
  );
}
