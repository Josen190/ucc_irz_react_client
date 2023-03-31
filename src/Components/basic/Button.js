var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import "./basic.css";
import { Link } from "react-router-dom";
export default function Button(props) {
    var _a, _b, _c, _d, _e;
    var button;
    var classNames = "button center color-" +
        (props.color !== undefined ? props.color : "basic");
    switch (props.type) {
        case "button":
            var buttonprops = {
                className: classNames,
                disabled: (_a = props.disabled) !== null && _a !== void 0 ? _a : false,
                onClick: props.onClick,
            };
            button = React.createElement("button", __assign({}, buttonprops), props.children);
            break;
        case "link":
            button = (React.createElement("div", { className: classNames },
                React.createElement(Link, { to: (_b = props.href) !== null && _b !== void 0 ? _b : "" },
                    React.createElement("div", { className: "center" }, props.children))));
            break;
        case "submit":
            var submitrops = {
                value: props.title !== undefined ? props.title : "",
                onClick: props.onClick,
                id: (_c = props.id) !== null && _c !== void 0 ? _c : "",
                required: (_d = props.required) !== null && _d !== void 0 ? _d : false,
                disabled: (_e = props.disabled) !== null && _e !== void 0 ? _e : false,
            };
            button = (React.createElement("label", { className: classNames },
                props.children,
                React.createElement("input", __assign({ type: "submit" }, submitrops))));
            break;
        default:
            break;
    }
    return (React.createElement("div", { className: "button-contener center " +
            (props.className !== undefined ? props.className : "") }, button));
}
