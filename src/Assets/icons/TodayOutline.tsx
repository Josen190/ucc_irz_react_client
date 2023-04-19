import * as React from "react";
import { PropsSvg } from ".";

const SvgTodayOutline = ({
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
    <rect
      fill={fill}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      x={48}
      y={80}
      width={416}
      height={384}
      rx={48}
    />
    <path
      fill={fill}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      strokeLinecap="round"
      d="M128 48v32m256-32v32"
    />
    <rect
      fill={fill}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      strokeLinecap="round"
      x={112}
      y={224}
      width={96}
      height={96}
      rx={13}
    />
    <path
      fill={fill}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      strokeLinecap="round"
      d="M464 160H48"
    />
  </svg>
);
export default SvgTodayOutline;
