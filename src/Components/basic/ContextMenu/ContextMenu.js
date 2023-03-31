import React from "react";
import "./ContextMenu.css";
function ContextMenu(_a) {
    var screenX = _a.screenX, screenY = _a.screenY, children = _a.children;
    var _screenX = screenX.toString() + "px";
    var _screenY = screenY.toString() + "px";
    return (React.createElement("div", { className: "contextMenu", style: {
            "--screen-x": _screenX,
            "--screen-y": _screenY,
        } }, children));
}
export default ContextMenu;
