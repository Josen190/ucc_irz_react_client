import React, { Component } from "react";
import Image from "../../Helpers/Image";
import Img from "UI/Img/Img";

interface PropsProfilePicture {
  type: "base" | "mini" | "norm";
  image: Image;
}

export default function Avatar({ type, image }: PropsProfilePicture) {
  return (
    <div className={"logo " + type}>
      <Img image={image}></Img>
    </div>
  );
}
