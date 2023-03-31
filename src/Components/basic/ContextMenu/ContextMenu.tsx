import React, { CSSProperties } from "react";
import "./ContextMenu.css";

interface CustomCSSProperties extends CSSProperties {
  "--screen-x"?: string;
  "--screen-y"?: string;
}

interface Props {
  screenX: number;
  screenY: number;
  children: JSX.Element | JSX.Element[];
  style?: CustomCSSProperties;
}

function ContextMenu({ screenX, screenY, children }: Props): JSX.Element {
  const _screenX = screenX.toString() + "px";
  const _screenY = screenY.toString() + "px";

  return (
    <div
      className="contextMenu"
      style={
        {
          "--screen-x": _screenX,
          "--screen-y": _screenY,
        } as CustomCSSProperties
      }
    >
      {children}
    </div>
  );
}

export default ContextMenu;
