import React, { useState } from "react";
import Checkbox from "../basic/Checkbox";
import Button from "../basic/Button";
import "./news.css";
import API, { url_post_news } from "../../api/Api";
import InputField from "../basic/InputField";
import { notifyError, notifySuccess } from "../Notifications/Notifications";
import { useEffect } from "react";

export default function CreateTidings({ setActive , updateNews}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [isGlobal, setIsGlobal] = useState(false);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imagesUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imagesUrls]);
  };

  const createNews = (event) => {
    event.preventDefault();

    const data = {
      title: title,
      text: content,
      isPublic: isGlobal,
    };
    API.post(url_post_news, data)
      .then((response) => {
        notifySuccess("Новость создана");
        setActive(false);
        setTitle("");
        setContent("");
        setImages([]);
        setTitle(false);
        notifySuccess("Новость создана");
        if (typeof updateNews.update === 'function') updateNews.update();
      })
      .catch((error) => {
        notifyError("Новость не создана, попробуйте снова");
      });
  };

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
          title="Заголовок"
          onChange={(event) => setTitle(event.target.value)}
        />
        <InputField
          rows="15"
          onChange={(event) => setContent(event.target.value)}
        />
        <label>
          Добавить картинки:
          <input type="file" multiple onChange={handleImageChange} />
        </label>
        <ul>
          {images.map((imageUrl) => (
            <li key={imageUrl}>
              <img className="image" src={imageUrl} alt="Новость" />
            </li>
          ))}
        </ul>

        <Checkbox
          title="Глобальная новость"
          onChange={(event) => setIsGlobal(event.target.value)}
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
