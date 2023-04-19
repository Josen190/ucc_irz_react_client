import React from "react";
import { PropsSvg } from ".";


const SvgAddCircleOutline = ({
  title = undefined,
  titleId = undefined,
  className = undefined,
  size = "25px",
  fill = "none",
}: PropsSvg) => {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      width={size}
      height={size}
      aria-labelledby={titleId}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        fill={fill}
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <path
        fill={fill}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 176v160m80-80H176"
      />
    </svg>
  );
};

export default SvgAddCircleOutline;
