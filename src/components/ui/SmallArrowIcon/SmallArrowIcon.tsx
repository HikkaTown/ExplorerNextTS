import React from "react";
import { IconProps } from "src/interfaces";

export default function SmallArrowIcon({ className }: IconProps) {
  return (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4 6L8.16667 10.1667L4 14.3333V6Z" fill="#78909C" />
      <path d="M4 6L8.16667 10.1667L4 14.3333V6Z" fill="#78909C" />
    </svg>
  );
}
