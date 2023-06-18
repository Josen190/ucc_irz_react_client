import React from "react";
import { useState } from "react";
import Image from "Helpers/Image";
import "./CreateTidings.scss";
import {useNavigate, useOutletContext} from "react-router-dom";
import {ModalForm} from "UI/Form";
import { InputCheckbox, InputText } from "UI/Input";
import { InputImg } from "UI/InputImg";

export default function CreateTidings() {
  const newNews = useOutletContext() as ((title: string, content: string, isGlobal: boolean, image?: Image) =>  Promise<void>);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<Image | null>(null);
  const [isGlobal, setIsGlobal] = useState(false);

  const navigate = useNavigate()

  const confirm = () => {
    newNews(title, content, isGlobal, images ?? undefined).then(() => {
      navigate("../");
    })
  }


  return (
      <ModalForm title={"Создать"} confirm={confirm}>
        <h3>Создать новость</h3>
        <InputText
            title="Заголовок"
            onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
            rows={15}
            onChange={(event) => {
              setContent(event.target.value)
            }}
        />

        <InputImg view="news" setImageApi={setImages}></InputImg>

        <InputCheckbox 
          title="Глобальная новость"
          onChange={(event) => setIsGlobal(event.target.value === "true")}
        />
      </ModalForm>
  );
}
