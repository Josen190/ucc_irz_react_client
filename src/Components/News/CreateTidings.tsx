import React, { useState } from "react";
import Checkbox from "../basic/Checkbox";
import Button from "../basic/Button";
import "./news.css";
import API, { url_post_news } from "../../api/Api";
import InputField from "../basic/InputField";
import { notifyError, notifySuccess } from "../Notifications/Notifications";
import { useEffect } from "react";

function mergeMaps(map1, map2) {
  const mergedMap = new Map();
  
  map1.forEach((value, key) => mergedMap.set(key, value));
  map2.forEach((value, key) => mergedMap.set(key, value));
  
  return mergedMap;
}



export default function CreateTidings({ setActive, updateNews }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState(new Map());
  const [isGlobal, setIsGlobal] = useState(false);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const processFiles =  new  Promise((resolve) => {
      const _images = new Map();
  
      let processedCount = 0;
      files.forEach((file) => {
        const sendFile = {}
        sendFile.name = file.name.replace(/\.[^/.]+$/, "")
        sendFile.extension = file.name.split('.').pop();
        
        const reader = new FileReader();
        reader.onloadend = () => {
          sendFile.data = reader.result.replace("data:", "").replace(/^.+,/, "");
          _images.set(URL.createObjectURL(file), sendFile);
          processedCount++;
          if (processedCount === files.length) {
            resolve(_images);
          }
        };
        reader.readAsDataURL(file);
      });
    });


    processFiles.then((result) => {
      setImages((prevImages) => {
        return mergeMaps(prevImages, result);
      })
    })
  };

  const createNews = (event) => {
    event.preventDefault();

    const data = {
      title: title,
      text: content,
      isPublic: isGlobal,
      image: images.size > 0 ? { } : null,
    };

    if (images.size > 0){
      images.forEach((file) => {
        data.image.name = file.name;
        data.image.extension = file.extension;
        data.image.data = file.data;
      })
    }
    


    API.post(url_post_news, data)
      .then((response) => {
        notifySuccess("Новость создана");
        setActive(false);
        setTitle("");
        setContent("");
        setImages(new Map());
        setTitle(false);
        if (typeof updateNews.update === "function") updateNews.update();
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
          title="Заголовок"
          onChange={(event) => setTitle(event.target.value)}
        />
        <InputField
          rows="15"
          onChange={(event) => setContent(event.target.value)}
        />
        <label>
          Добавить картинки:
          <input type="file" onChange={handleImageChange} />
        </label>
        <ul>
          {Array.from(images.keys()).map((imageUrl) => {
            return (
              <li key={imageUrl}>
                <img className="image" src={imageUrl} alt="Новость" />
              </li>
            );
          })}
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
