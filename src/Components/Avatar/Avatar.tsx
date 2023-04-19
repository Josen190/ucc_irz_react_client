import React, { Component } from "react";
import Image from "../../Helpers/Image";
import Img from "UI/Img/Img";

interface PropsProfilePicture {
  type: "base" | "mini" | "norm";
  image: Image | null;
}

export default function Avatar({ type, image }: PropsProfilePicture) {
  return (
    <div className={"logo " + type}>
      {image && <Img image={image}></Img>}
    </div>
  );
}
