import * as React from "react";
const SvgCalendarOutline = ({ title, titleId, className='', size='25px', fill='none', ...props }) => (
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
    <circle cx={296} cy={232} r={24} />
    <circle cx={376} cy={232} r={24} />
    <circle cx={296} cy={312} r={24} />
    <circle cx={376} cy={312} r={24} />
    <circle cx={136} cy={312} r={24} />
    <circle cx={216} cy={312} r={24} />
    <circle cx={136} cy={392} r={24} />
    <circle cx={216} cy={392} r={24} />
    <circle cx={296} cy={392} r={24} />
    <path
      fill={fill}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      strokeLinecap="round"
      d="M128 48v32m256-32v32"
    />
    <path
      fill={fill}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M464 160H48"
    />
  </svg>
);
export default SvgCalendarOutline;
