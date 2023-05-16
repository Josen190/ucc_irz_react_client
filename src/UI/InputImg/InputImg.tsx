import Image from "Helpers/Image";
import React, { useState } from "react";
import "./inputImg.scss"
import ImageOutline from "../../Assets/icons/ImageOutline";

interface Props {
  setImageApi: (image: Image | null) => unknown;
  view: "avatar" | "messenger"
}

export default function InputImg({ view, setImageApi }: Props) {
  const [image, setImage] = useState<Image | null>(null);

  const setImageAll = (file: File | null) => {

    if (file === null) {
      setImage(null);
      setImageApi(null);
      return;
    }

    Image.toBase64(file).then(image => {
      setImage(image);
      setImageApi(image);
    }).catch(() => {
      setImage(null);
      setImageApi(null);
    })

  }
  const className = `preview-${view}`;
  let title: string | JSX.Element;
  switch (view) {
    case "avatar":
      title = "Загрузать: ";
      break;
    case "messenger":
      title = <ImageOutline />;
      break;
  }


  return (
    <div className={"input-img" + " view-" + view}>
      <div className={className}>
        <img src={image?.url} />
      </div>
      <div className={"img-"+view}>
        <label>
          {title}
          <input type="file" accept="image/png, image/jpeg" onChange={e => { setImageAll(e.target.files ? e.target.files.item(0) : null) }} />
        </label>
      </div>
    </div>
  );
}
