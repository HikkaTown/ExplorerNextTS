import React from "react";
import { IconProps } from "src/interfaces";

export default function YellowFolderIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.8 15.4H7.2V9.4H16.8V15.4ZM16.8 8.2H12L10.8 7H7.2C6.534 7 6 7.534 6 8.2V15.4C6 15.7183 6.12643 16.0235 6.35147 16.2485C6.57652 16.4736 6.88174 16.6 7.2 16.6H16.8C17.1183 16.6 17.4235 16.4736 17.6485 16.2485C17.8736 16.0235 18 15.7183 18 15.4V9.4C18 8.734 17.46 8.2 16.8 8.2Z"
        fill="#F3AA18"
      />
    </svg>
  );
}
