import React from 'react';
import Button from '../../Button';
function ContextButton(_a) {
    var children = _a.children, onClick = _a.onClick;
    return (React.createElement(Button, { type: "button", onClick: onClick }, children));
}
export default ContextButton;
