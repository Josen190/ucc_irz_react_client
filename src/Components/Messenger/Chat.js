import React from "react";
export default function Chat() {
    var name = "Захаров Вячеслав Сергеевич";
    var statusUser = "online";
    return (React.createElement("main", { className: "chat" },
        React.createElement("div", { className: "row" },
            React.createElement("h4", null, name),
            React.createElement("p", null, statusUser)),
        React.createElement("div", { className: "" })));
}
