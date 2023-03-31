import React from "react";
export default function ProfilePicture(_a) {
    var type = _a.type, image = _a.image;
    return React.createElement("div", { className: "logo " + type }, image.getImgJSX());
}
