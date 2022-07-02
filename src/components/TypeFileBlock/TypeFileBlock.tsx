import FileLine from "@components/FileLine";
import FolderLine from "@components/FolderLine";
import React from "react";
import { IFile, IFilesProps } from "src/interfaces";
import { FOLDER, FILE } from "src/lib/const";

export default function TypeFileBlock({ data }: IFilesProps) {
  return (
    <>
      {data.map((item: IFile, index: number) => {
        if (item.type === FOLDER) {
          return <FolderLine data={item} key={index} />;
        }
        if (item.type === FILE) {
          return <FileLine data={item} key={index} />;
        }
      })}
    </>
  );
}
