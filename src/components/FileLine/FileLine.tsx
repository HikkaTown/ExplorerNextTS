import FileIcon from "@components/ui/FileIcon";
import React from "react";
import { IFileProps } from "src/interfaces";
import s from "./FileLine.module.scss";

export default function FileLine({ data }: IFileProps) {
  return (
    <li className={s.file_line}>
      <FileIcon className={s.file_icon} />
      {data.fileName}
    </li>
  );
}
