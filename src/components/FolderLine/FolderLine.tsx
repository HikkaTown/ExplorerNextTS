import React, { useState } from "react";
import cs from "classnames";
import FileLine from "@components/FileLine";
import ArrowIcon from "@components/ui/ArrowIcon";
import FolderIcon from "@components/ui/FolderIcon";
import { FOLDER, FILE } from "src/lib/const";
import s from "./FolderLine.module.scss";
import { IContent, IFileProps } from "src/interfaces";
import TypeFileBlock from "@components/TypeFileBlock/TypeFileBlock";

export default function FolderLine({ data }: IFileProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };
  return (
    <li>
      <ul className={s.folder_list}>
        <li className={s.folder_line} onClick={handleOpen}>
          <ArrowIcon
            className={cs(s.folder_arrow, isOpen ? s.folder_arrow_open : "")}
          />
          <FolderIcon className={s.folder_icon} />
          {data.fileName}
        </li>
        {isOpen ? (
          <li>
            <ul className={s.sub_list}>
              {data.content?.length ? (
                <TypeFileBlock data={data.content} />
              ) : (
                ""
              )}
            </ul>
          </li>
        ) : (
          ""
        )}
      </ul>
    </li>
  );
}
