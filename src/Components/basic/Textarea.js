import React, { createRef } from "react";
function fixTextareaSize(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + 2 + "px";
}
var Textarea = function (_a) {
    var className = _a.className, name = _a.name, cols = _a.cols, rows = _a.rows, placeholder = _a.placeholder, value = _a.value, autoComplete = _a.autoComplete, maxlength = _a.maxlength, minlength = _a.minlength, isresize = _a.isresize, onInput = _a.onInput;
    var textareaRef = createRef();
    React.useEffect(function () {
        if (textareaRef.current && isresize === true) {
            fixTextareaSize(textareaRef.current);
        }
    }, [value, isresize]);
    return (React.createElement("textarea", { className: className, name: name, cols: cols, rows: rows, placeholder: placeholder, defaultValue: value, autoComplete: autoComplete, maxLength: maxlength, minLength: minlength, ref: textareaRef, onInput: function (e) {
            if (isresize === true) {
                fixTextareaSize(e.currentTarget);
            }
            onInput && onInput(e);
        } }));
};
export default Textarea;
