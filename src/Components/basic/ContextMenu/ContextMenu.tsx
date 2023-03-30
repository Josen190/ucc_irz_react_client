import React from "react";
import "./ContextMenu.css";

function ContextMenu({ screenX, screenY, children }) {
    const _screenX = typeof screenX === 'number'? screenX.toString() + "px": 0;
    const _screenY = typeof screenY === 'number'? screenY.toString() + "px": 0;
  return (
    <div
      className="contextMenu"
      style={{ "--screen-x": _screenX, "--screen-y": _screenY }}
    >
      {children}
    </div>
  );
}

export default ContextMenu;
