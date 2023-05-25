import React from "react";
import Button from "UI/Button/Button";
import InputField from "UI/InputField/InputField";
import { useState } from "react";
import Image from "Helpers/Image";
import "./CreateTidings.scss";
import {useNavigate, useOutletContext} from "react-router-dom";
import InputImg from "UI/InputImg/InputImg";

export default function CreateTidings() {
  const newNews = useOutletContext() as ((title: string, content: string, isGlobal: boolean, image?: Image) =>  Promise<void>);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<Image | null>(null);
  const [isGlobal, setIsGlobal] = useState(false);

  const navigate = useNavigate()

  return (
    <div
      className="modal"
      onClick={() => {
        navigate("../");
      }}
    >
      <form
        className="column tile"
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={(e) => {
          e.preventDefault();
          newNews(title, content, isGlobal, images ?? undefined).then(() => {
            navigate("../");
          })
        }}
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
          onChange={(event) => {
            setContent(event.target.value)
          }}
        />

        <InputImg view="news" setImageApi={setImages}></InputImg>
        {/*<label>*/}
        {/*  Добавить картинки:*/}
        {/*  <input type="file" onChange={handleImageChange} />*/}
        {/*</label>*/}
        {/*<ul>*/}
        {/*  {images && (*/}
        {/*    <img className="image" src={images.url} alt="Новость" />*/}
        {/*  )}*/}
        {/*</ul>*/}

        <InputField type="checkbox"
          title="Глобальная новость"
          onChange={(event) => setIsGlobal(event.target.value === "true")}
        />
        {/*<Button*/}
        {/*  type="button"*/}
        {/*  onClick={() => {*/}
        {/*    navigate("../");*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Отмена*/}
        {/*</Button>*/}
        <Button type="submit">Создать</Button>
      </form>
    </div>
  );
}
