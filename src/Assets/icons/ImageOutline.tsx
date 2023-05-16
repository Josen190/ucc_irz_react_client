import {PropsSvg} from "./index";
import * as React from "react";

const ImageOutline = ({
                          title = undefined,
                          titleId = undefined,
                          className = undefined,
                          size = "25px",
                      }: PropsSvg) => {
  return <svg className={className}
              viewBox="0 0 512 512"
              width={size}
              height={size}
              aria-labelledby={titleId}>

      {title && <title id={titleId}>{title}</title>}
      <rect x="48" y="80" width="416" height="352" rx="48" ry="48" fill="none" stroke="currentColor"
            strokeLinecap="round" strokeWidth="32"/>
      <circle cx="336" cy="176" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
      <path d="M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0143.11-2L464 368"
            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
  </svg>
}

export default ImageOutline;