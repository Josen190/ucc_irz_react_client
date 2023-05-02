import Image from "Helpers/Image";
import React, { useState } from "react";
import "./inputImg.scss"

interface Props {
  setImageApi: (image: Image | null) => any
  view: "avatar"
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
  return (
    <div className="input-img">
      <div className={className}>
        <img src={image?.url} />
      </div>
      <div>
        <label>
          Загрузить:
          <input type="file" accept="image/png, image/jpeg" onChange={e => { setImageAll(e.target.files ? e.target.files.item(0) : null) }} />
        </label>
      </div>
    </div>
  );
}
