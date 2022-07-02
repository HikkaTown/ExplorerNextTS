export interface IconProps {
  className?: string;
}

export interface IFile {
  fileName: string;
  type: string;
  content: IContent[] | null;
}

export interface IContent {
  fileName: string;
  type: string;
  content: IFile[] | null;
}

export type IFilesProps = {
  data: IFile[];
};

export type IFileProps = {
  data: IFile;
};

export interface INavigationExploreItem {
  isOpen: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
