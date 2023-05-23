import React, { useEffect, useState } from "react";
import Image from "../../Helpers/Image";
import getImage from "Fetch/getImage";

interface Props {
  image: Image;
}

function Img({ image }: Props) {
  const [_image, setImage] = useState(image);

  useEffect(() => {
    if (_image.url) return;
    getImage(_image.id)
        .then(image => setImage(image))
        .catch(() => setImage(new Image()));
    // _image.getImg(setImage)
  }, [])

  return (
    <img
      src={_image.url}
      alt={_image.name}
    ></img>
  );
}

export default Img;
