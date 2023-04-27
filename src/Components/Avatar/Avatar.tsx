import React, { Component, useEffect, useState } from "react";
import Image from "../../Helpers/Image";
import Img from "UI/Img/Img";

import "./Avatar.scss"
import API from "Fetch/Api";
import getImage from "Fetch/getImage";

interface PropsProfilePicture {
  type: "mini" | "norm";
  image: Image | null;
}

export default function Avatar({ type, image }: PropsProfilePicture) {
  const [_image, setImage] = useState(image);

  useEffect(() => {
    if (image && !image.data){
      getImage(image.id).then(image => {
        setImage(image);
      })
    }
  }, [])
  

  return (
    <div className={"logo " + type}>
      {_image && <Img image={_image}></Img>}
    </div>
  );
}
