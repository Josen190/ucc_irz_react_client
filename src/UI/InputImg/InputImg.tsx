import Image from "Helpers/Image";
import React, {useEffect, useState} from "react";
import "./inputImg.scss"
import ImageOutline from "../../Assets/icons/ImageOutline";

interface Props {
  setImageApi: (image: Image | null) => unknown;
  view: "avatar" | "messenger" | "news"
  value?: Image | null;
}

export default function InputImg({ view, setImageApi, value }: Props) {
  const [image, setImage] = useState<Image | null>(null);

  useEffect(() => {
    setImage(value ?? null);
  }, [value])

  const setImageAll = (file: File | null) => {
    if (file === null) {
      setImage(null);
      setImageApi(null);
      return;
    }
    const _image = Image.getImg(file);
    setImage(_image);
    setImageApi(_image);
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
    case "news":
      title = "Добавить картинки:"
      break;
  }


  return (
    <div className={"input-img" + " view-" + view}>
      <div className={className}>
        <img src={image?.url} alt={image?.name}/>
      </div>
      <div className={"img-"+view}>
        <label>
          {title}
          <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={e => { setImageAll(e.target.files ? e.target.files.item(0) : null) }}
          />
        </label>
      </div>
    </div>
  );
}
