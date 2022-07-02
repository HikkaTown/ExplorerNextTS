import React from "react";
import { IconProps } from "src/interfaces";

export default function PersonIcon({ className }: IconProps) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14 6C15.0609 6 16.0783 6.42143 16.8284 7.17157C17.5786 7.92172 18 8.93913 18 10C18 11.0609 17.5786 12.0783 16.8284 12.8284C16.0783 13.5786 15.0609 14 14 14C12.9391 14 11.9217 13.5786 11.1716 12.8284C10.4214 12.0783 10 11.0609 10 10C10 8.93913 10.4214 7.92172 11.1716 7.17157C11.9217 6.42143 12.9391 6 14 6ZM14 16C18.42 16 22 17.79 22 20V22H6V20C6 17.79 9.58 16 14 16Z"
        fill="#78909C"
      />
    </svg>
  );
}
