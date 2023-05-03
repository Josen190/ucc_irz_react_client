
import Button from "UI/Button/Button";
import InputField from "UI/InputField/InputField";
import InputImg from "UI/InputImg/InputImg";
import { notifySuccess, notifyError } from "Components/Notifications/Notifications";
import React, { useState, useEffect } from "react";
import Image from "Helpers/Image";
import VisitingUser from "Helpers/VisitingUser";
import { useAppDispatch } from "Hooks";
import { setUserImage } from "Modules/AuthController";
import getUserMe from "Fetch/getUserMe";
import putUpdateInfo from "../../Fetch/putUpdateInfo";
import putUpdetePhoto from "../../Fetch/putUpdetePhoto";

function EditInfo() {
  const dispatch = useAppDispatch()
  const [image, setImage] = useState<Image | null>(null)
  const [myself, setMyself] = useState("");
  const [iDid, setIDid] = useState("");
  const [achievements, setAchievements] = useState("");
  const [skills, setSkills] = useState("");


  useEffect(() => {
    getUserMe().then((user) => {
      setMyself(user.aboutMyself ?? "");
      setIDid(user.myDoings ?? "");
      setAchievements(user.skills ?? "");
      setSkills(user.skills ?? "");
    });
  }, []);

  console.log(image);
  

  const save = () => {
    if (image && image.name && image.extension && image.data) {
      putUpdetePhoto(image.name, image.extension, image.data).then((newImage) => {
        dispatch(setUserImage({image: newImage}))
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
      <InputField
        type="textarea"
        title="О себе"
        placeholder="Введите информацию о себе"
        value={myself}
        onChange={(event: any) => {
          setMyself(event.target.value);
        }}
      />
      <InputField
        type="textarea"
        title="Чем занимался"
        placeholder="Введите чем вы занимались"
        value={iDid}
        onChange={(event: any) => {
          setIDid(event.target.value);
        }}
      />
      <InputField
        type="textarea"
        title="Навыки и компетенции"
        placeholder="Расскажите о ваших навыках "
        value={skills}
        onChange={(event: any) => {
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
