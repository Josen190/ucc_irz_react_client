import * as React from "react";
import { PropsSvg } from ".";

const SvgNewspaperOutline = ({
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
      d="M368 415.86V72a24.07 24.07 0 0 0-24-24H72a24.07 24.07 0 0 0-24 24v352a40.12 40.12 0 0 0 40 40h328"
      fill={fill}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <path
      d="M416 464a48 48 0 0 1-48-48V128h72a24 24 0 0 1 24 24v264a48 48 0 0 1-48 48z"
      fill={fill}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <path
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M240 128h64m-64 64h64m-192 64h192m-192 64h192m-192 64h192"
    />
    <path d="M176 208h-64a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16z" />
  </svg>
);
export default SvgNewspaperOutline;
