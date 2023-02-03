import * as React from "react";
const SvgTodayOutline = ({ title, titleId, className='', size='25px', fill='none', ...props }) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    width={size}
    height={size}
    aria-labelledby={titleId}
    {...props}
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
