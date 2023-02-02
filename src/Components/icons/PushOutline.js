import * as React from "react";
const SvgPushOutline = ({ title, titleId, size='25px', fill='none', ...props }) => (
  <svg
    className="push-outline_svg__ionicon"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M336 336h40a40 40 0 0 0 40-40V88a40 40 0 0 0-40-40H136a40 40 0 0 0-40 40v208a40 40 0 0 0 40 40h40"
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <path
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m176 240 80-80 80 80m-80 224V176"
    />
  </svg>
);
export default SvgPushOutline;
