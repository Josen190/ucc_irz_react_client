import React from "react";
import createNews from "../../Fetch/createNews";
import Button from "UI/Button/Button";
import InputField from "UI/InputField/InputField";
import { useState } from "react";
import Image from "Helpers/Image";
import "./CreateTidings.scss";
import News from "Helpers/News";
import VisitingUser from "Helpers/VisitingUser";
import { useAppSelector } from "Hooks";
import User from "Helpers/User";

interface Props {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  updateNews: ((news: News) => void);
}

export default function CreateTidings({ setActive, updateNews }: Props) {
  const user = useAppSelector((s) => {
    const paramsUser = s.authorization.user;
    return paramsUser ? new User(paramsUser) : null;
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<Image | null>(null);
  const [isGlobal, setIsGlobal] = useState(false);



  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files.item(0);
    if (!file) return;
    Image.toBase64(file).then((result) => {
      setImages(result);
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
        onSubmit={(e) => {
          e.preventDefault();
          createNews(user ?? new VisitingUser(), title, content, isGlobal).then((news) => {
            updateNews(news);
            setActive(false);
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
        <label>
          Добавить картинки:
          <input type="file" onChange={handleImageChange} />
        </label>
        <ul>
          {images && (
            <img className="image" src={images.data} alt="Новость" />
          )}
        </ul>

        <InputField type="checkbox"
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
