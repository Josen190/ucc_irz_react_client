import React from "react";
import Button from "../basic/Button";
export default function MenuLink(_a) {
    var href = _a.href, children = _a.children;
    return (React.createElement(Button, { type: "link", href: href, className: "mg-5-0", color: "mini" }, children));
}
