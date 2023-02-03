import * as React from "react";
const SvgThumbsUpOutline = ({ title, titleId, className='', size='25px', fill='none', ...props }) => (
  <svg
    className={className}
    viewBox="0 0 512 512"
    width={size}
    height={size}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M320 458.16S304 464 256 464s-74-16-96-32H96a64 64 0 0 1-64-64v-48a64 64 0 0 1 64-64h30a32.34 32.34 0 0 0 27.37-15.4S162 221.81 188 176.78 264 64 272 48c29 0 43 22 34 47.71-10.28 29.39-23.71 54.38-27.46 87.09-.54 4.78 3.14 12 7.95 12L416 205"
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <path
      d="m416 271-80-2c-20-1.84-32-12.4-32-30s14-28.84 32-30l80-4c17.6 0 32 16.4 32 34v.17A32 32 0 0 1 416 271zm32 65-112-2c-18-.84-32-12.41-32-30 0-17.61 14-28.86 32-30l112-2a32.1 32.1 0 0 1 32 32 32.1 32.1 0 0 1-32 32zm-48 128-64-3c-21-1.84-32-11.4-32-29s14.4-30 32-30l64-2a32.09 32.09 0 0 1 32 32 32.09 32.09 0 0 1-32 32zm32-64-96-2c-19-.84-32-12.4-32-30s13-28.84 32-30l96-2a32.09 32.09 0 0 1 32 32 32.09 32.09 0 0 1-32 32z"
      fill={fill}
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
  </svg>
);
export default SvgThumbsUpOutline;
