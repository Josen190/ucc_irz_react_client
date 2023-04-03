import React, { useState } from "react";
import Checkbox from "../../InputField/Checkbox/Checkbox";
import Button from "../../Button/Button";
import "./news.css";
import API, { url_post_news } from "../../../Fetch/Api";
import InputField from "../../InputField/InputField";
import { notifyError, notifySuccess } from "../../Notifications/Notifications";
import { useEffect } from "react";
import Image from "../../../Helpers/Image";

function mergeMaps(map1, map2) {
  const mergedMap = new Map();

  map1.forEach((value, key) => mergedMap.set(key, value));
  map2.forEach((value, key) => mergedMap.set(key, value));

  return mergedMap;
}

interface Props {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  updateNews: Function;
}

export default function CreateTidings({ setActive, updateNews }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<Image | null>(null);
  const [isGlobal, setIsGlobal] = useState(false);

  const handleImageChange = (event) => {
    Image.toBase64(event.target.files).then((result) => {
      setImages(result);
    });
  };

  const createNews = (event) => {
    event.preventDefault();
    API.postNews(title, content, isGlobal)
      .then(() => {
        notifySuccess("Новость создана");
        setActive(false);
        updateNews();
      })
      .catch((error) => {
        notifyError("Новость не создана, попробуйте снова");
      });
  };

  console.log(images);

  return (
    <div
      className="modal"
      onClick={() => {
        setActive(false);
      }}
    >
      <form
        className="column tile"
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={(e) => createNews(e)}
      >
        <h3>Создать новость</h3>
        <InputField
          type="text"
          title="Заголовок"
          onChange={(event) => setTitle(event.target.value)}
        />
        <InputField
          type="textarea"
          rows={15}
          onChange={(event) => setContent(event.target.value)}
        />
        <label>
          Добавить картинки:
          <input type="file" onChange={handleImageChange} />
        </label>
        <ul>
          {images && (
            <img className="image" src={images.base64} alt="Новость" />
          )}
        </ul>

        <Checkbox
          title="Глобальная новость"
          onChange={(event) => setIsGlobal(event.target.value === "true")}
        />
        <Button
          type="button"
          onClick={() => {
            setActive(false);
          }}
        >
          Отмена
        </Button>
        <Button type="submit">Создать</Button>
      </form>
    </div>
  );
}
