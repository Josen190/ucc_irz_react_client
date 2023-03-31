import React from "react";
export default function Part_Pers_Info(_a) {
    var title = _a.title, value = _a.value;
    return (React.createElement("span", null,
        React.createElement("h5", null,
            title,
            ": "),
        React.createElement("p", null, value)));
}
