
import { notifySuccess, notifyError } from "Components/Notifications/Notifications";
import React, { useState, useEffect } from "react";
import Image from "Helpers/Image";
import { useAppDispatch } from "Hooks";
import { setUserImage } from "Modules/AuthController";
import getUserMe from "Fetch/getUserMe";
import putUpdateInfo from "../../Fetch/putUpdateInfo";
import putUpdetePhoto from "../../Fetch/putUpdetePhoto";
import { InputImg } from "UI/InputImg";
import { Button } from "UI/Button";

function EditInfo() {
  const dispatch = useAppDispatch()
  const [image, setImage] = useState<Image | null>(null)
  const [myself, setMyself] = useState("");
  const [iDid, setIDid] = useState("");
  const [skills, setSkills] = useState("");


  useEffect(() => {
    getUserMe().then((user) => {
      setMyself(user.aboutMyself ?? "");
      setIDid(user.myDoings ?? "");
      setSkills(user.skills ?? "");
    });
  }, []);



  const save = () => {
    if (image && image.name && image.url) {
      putUpdetePhoto(image).then((newImage) => {
        dispatch(setUserImage({image: newImage}))
          notifySuccess("фото обновлено");
      }).catch(() => {
          notifyError("фото не обновлено");
      })
    }

    putUpdateInfo(myself, iDid, skills)
      .then(() => {
        notifySuccess("изменения сохранены");
      })
      .catch(() => {
        notifyError("изменения не сохранены");
      });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); save() }}>
      <InputImg view="avatar" setImageApi={setImage} />
      <textarea
        title="О себе"
        placeholder="Введите информацию о себе"
        defaultValue={myself}
        onChange={(event: unknown) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
          setMyself(event.target.value);
        }}
      />
      <textarea
        title="Чем занимался"
        placeholder="Введите чем вы занимались"
        defaultValue={iDid}
        onChange={(event: unknown) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setIDid(event.target.value);
        }}
      />
      <textarea
        title="Навыки"
        placeholder="Расскажите о ваших навыках "
        defaultValue={skills}
        onChange={(event: unknown) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
          setSkills(event.target.value);
        }}
      />
      <div>
        <Button type="submit">Сохранить</Button>
      </div>
    </form>
  );
}

export default EditInfo;
