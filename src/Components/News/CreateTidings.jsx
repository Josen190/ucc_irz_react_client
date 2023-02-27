import React, { Component, useRef, useState } from "react";
import Checkbox from "../basic/Checkbox";
import Textarea from "../basic/Textarea";
import Button from "../basic/Button";
import "./news.css";
import Form from "./Form";
import API, { url_postNews } from "../../api/Api";
import InputField from "../basic/InputField";
import { notifyError, notifySuccess } from "../Notifications/Notifications";

const CreateTidings = ({ setActive }) => {
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
    event.stopPropagation();
    event.preventDefault();
    
    const data = {
      title: title,
      text: content, 
      isPublic: isGlobal,
    } 

    API.post(url_postNews, data).then(response => {
      notifySuccess("Новость создана");
      setActive(false);
      setTitle("");
      setContent("");
      setImages([]);
      setTitle(false);
      notifySuccess("Новость создана")
    }).catch(error => {
      notifyError("Новость не создана, попробуйте снова");
    })
  };

  return (
    <div
      className="modal"
      onClick={() => {
        setActive(false);
      }}
    >
      <form className="column tile" onClick={(e) => createNews(e)}>
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
};

export default CreateTidings;
