import React, { Component } from "react";
import Image from "../../class/Image";

interface PropsProfilePicture{
  type: "base" | "mini" | "norm";
  image: Image;
}

export default function ProfilePicture({ type, image }: PropsProfilePicture) {
  return (
    <div className={"logo " + type}>
      {image.getImgJSX()}
    </div>
  );
}
