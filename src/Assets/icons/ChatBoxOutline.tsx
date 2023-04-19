import * as React from "react";
import { PropsSvg } from ".";
const ChatBoxOutline = ({
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
      d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"
      fill={fill}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
    />
  </svg>
);
export default ChatBoxOutline;
