import React, { Component, useEffect, useState } from "react";
import Image from "../../Helpers/Image";
import Img from "UI/Img/Img";

import "./Avatar.scss"

import getImage from "Fetch/getImage";

interface PropsProfilePicture {
  type: "mini" | "norm";
  image: Image | null;
}

export default function Avatar({ type, image }: PropsProfilePicture) {
  return (
    <div className={"logo " + type}>
      <Img image={image ?? new Image()}></Img>
    </div>
  );
}
