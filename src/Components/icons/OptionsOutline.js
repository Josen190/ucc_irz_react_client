import * as React from "react";
const SvgOptionsOutline = ({ title, titleId, size='25px', fill='none', ...props }) => (
  <svg
    className="options-outline_svg__ionicon"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M368 128h80m-384 0h240m64 256h80m-384 0h240m-96-128h240m-384 0h80"
    />
    <circle
      cx={336}
      cy={128}
      r={32}
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <circle
      cx={176}
      cy={256}
      r={32}
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <circle
      cx={336}
      cy={384}
      r={32}
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
  </svg>
);
export default SvgOptionsOutline;
