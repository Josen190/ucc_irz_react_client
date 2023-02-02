import * as React from "react";
const SvgAddCircleOutline = ({ title, titleId, size='25px', fill='none', ...props }) => (
  <svg
    className="add-circle-outline_svg__ionicon"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    aria-labelledby={titleId}
    {...props}
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
export default SvgAddCircleOutline;
