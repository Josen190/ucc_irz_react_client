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
import Textarea from "./Textarea";
export default function InputField(_a) {
    var type = _a.type, id = _a.id, title = _a.title, placeholder = _a.placeholder, value = _a.value, maxlength = _a.maxlength, minlength = _a.minlength, name = _a.name, rows = _a.rows, required = _a.required, onChange = _a.onChange;
    var inputprops = {
        className: "",
        id: id !== null && id !== void 0 ? id : null,
        placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : null,
        defaultValue: value !== null && value !== void 0 ? value : null,
        autoComplete: "off",
        maxLength: maxlength !== null && maxlength !== void 0 ? maxlength : null,
        minLength: minlength !== null && minlength !== void 0 ? minlength : null,
        name: name !== null && name !== void 0 ? name : null,
        onChange: onChange !== null && onChange !== void 0 ? onChange : null,
    };
    var input;
    if (type === "textarea") {
        input = React.createElement(Textarea, __assign({}, inputprops, { rows: rows !== null && rows !== void 0 ? rows : 2, isresize: true }));
    }
    else {
        input = React.createElement("input", __assign({ type: type }, inputprops, { required: required !== null && required !== void 0 ? required : false }));
    }
    return (React.createElement("label", { className: "input w-100 mg-buttom-10 column " },
        title && React.createElement("h4", null, title),
        input));
}
