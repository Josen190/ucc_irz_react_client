import React from "react";
import API from "Fetch/Api";
import Button from "UI/Button/Button";
import InputField from "UI/InputField/InputField";
import { notifySuccess, notifyError } from "Components/Notifications/Notifications";
import { useState } from "react";


function Setting() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorPassword, setErrorPassword] = useState([]);

  const save = () => {
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
    <form onSubmit={(e) => { e.preventDefault(); save(); }}>
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
        {errorPassword.map((e: any) => (
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
