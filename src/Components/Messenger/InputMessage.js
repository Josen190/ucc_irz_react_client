import React from "react";
import Button from "../basic/Button";
import Textarea from "../basic/Textarea";
import SvgPaperPlaneOutline from "../icons/PaperPlaneOutline";
export default function InputMessage() {
    return (React.createElement("div", { className: "row glue-bottom" },
        React.createElement(Textarea, { rows: 1, isresize: "true" }),
        React.createElement(Button, { type: "submit", color: "mini" },
            React.createElement(SvgPaperPlaneOutline, null))));
}
