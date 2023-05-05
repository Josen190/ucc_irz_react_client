import React, { useEffect, useState } from "react";
import Image from "../../Helpers/Image";

interface Props {
  image: Image;
}

function Img({ image }: Props) {
  const [_image, setImage] = useState(image);

  useEffect(() => {
    if (_image.data) return;
    _image.getImg(setImage);

  }, [])

  return (
    <img
      src={`data:${_image.extension};base64,${_image.data}`}
      alt={_image.name}
    ></img>
  );
}

export default Img;
