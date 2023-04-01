import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import InputImg from "../../InputImg/InputImg";
import API, {
  url_get_users_me,
  url_put_users_me_update_info,
} from "../../../Fetch/Api";
import { notifyError, notifySuccess } from "../../Notifications/Notifications";

function EditInfo() {
  const [myself, setMyself] = useState("");
  const [iDid, setIDid] = useState("");
  const [achievements, setAchievements] = useState("");
  const [skills, setSkills] = useState("");

  useEffect(() => {
    API.get(url_get_users_me).then((response) => {
      setMyself(response.data.aboutMyself);
      setIDid(response.data.myDoings);
      setAchievements(response.data.skills);
      setSkills(response.data.skills);
    });
  }, []);

  const save = (event) => {
    event.preventDefault();

    API.put(url_put_users_me_update_info, {
      aboutMyself: myself,
      myDoings: iDid,
      skills: skills,
    })
      .then(() => {
        notifySuccess("изменения сохранены");
      })
      .catch((error) => {
        notifyError("изменения не сохранены");
      });
  };

  return (
    <form onSubmit={(e) => save(e)}>
      <InputImg />
      <InputField
        type="textarea"
        title="О себе"
        placeholder="Введите информацию о себе"
        value={myself}
        onChange={(event) => {
          setMyself(event.target.value);
        }}
      />
      <InputField
        type="textarea"
        title="Чем занимался"
        placeholder="Введите чем вы занимались"
        value={iDid}
        onChange={(event) => {
          setIDid(event.target.value);
        }}
      />
      <InputField
        type="textarea"
        title="Достижения"
        placeholder="Расскажите о ваших достижениях"
        value={achievements}
        onChange={(event) => {
          setAchievements(event.target.value);
        }}
      />
      <InputField
        type="textarea"
        title="Навыки и компетенции"
        placeholder="Расскажите о ваших навыках "
        value={skills}
        onChange={(event) => {
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
