import React from "react";
export default function Checkbox(_a) {
    var title = _a.title, onChange = _a.onChange;
    return (React.createElement("label", null,
        React.createElement("input", { type: "checkbox" }),
        React.createElement("p", null, title)));
}
