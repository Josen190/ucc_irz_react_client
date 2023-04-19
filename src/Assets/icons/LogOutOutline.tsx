import * as React from "react";
import { PropsSvg } from ".";

const SvgLogOutOutline = ({
  title = undefined,
  titleId = undefined,
  className = undefined,
  size = "25px",
  fill = "none",
}: PropsSvg) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    width={size}
    height={size}
    aria-labelledby={titleId}

  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40m64 160 80-80-80-80m-192 80h256"
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
  </svg>
);
export default SvgLogOutOutline;
