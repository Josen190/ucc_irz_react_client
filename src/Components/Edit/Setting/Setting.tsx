import React from "react";
import { useState } from "react";
import InputField from "../../InputField/InputField";
import API, { url_put_change_password } from "../../../Fetch/Api";
import Button from "../../Button/Button";
import { notifyError, notifySuccess } from "../../Notifications/Notifications";

function Setting() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorPassword, setErrorPassword] = useState([]);

  const save = (event) => {
    event.preventDefault();

    if (newPassword === rePassword) {
      API.putChangePassword(currentPassword, newPassword)
        .then(() => {
          notifySuccess("изменения сохранены");
        })
        .catch((error) => {
          notifyError("изменения не сохранены");
          setErrorPassword(error);
        });
    }
  };
  return (
    <form onSubmit={(e) => save(e)}>
      <div>
        <h4>Изменить пароль</h4>
        <InputField
          type={"password"}
          placeholder={"Старый пароль"}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <InputField
          type={"password"}
          placeholder={"Новый пароль"}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <InputField
          type={"password"}
          placeholder={"Повторить пароль"}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {errorPassword.map((e) => (
          <p key={e.code}>{e.description}</p>
        ))}
      </div>
      <div>
        <Button type="submit">Сохранить</Button>
      </div>
    </form>
  );
}
export default Setting;
