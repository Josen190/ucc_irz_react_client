import React from "react";
import Image from "../../Helpers/Image";

interface Props {
  image: Image;
}

function Img({ image }: Props) {
  return (
    <img
      src={`data:${image.extension};base64,${image.base64}`}
      alt={image.name}
    ></img>
  );
}

export default Img;
