import React from "react";
import { IconProps } from "src/interfaces";

export default function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.48"
        d="M3.41 8L8 12.59L12.59 8L14 9.42L8 15.42L2 9.42L3.41 8Z"
        fill="#78909C"
      />
    </svg>
  );
}
