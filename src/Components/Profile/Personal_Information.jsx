import React, { useState } from "react";
import { useContext } from "react";
import API, { url_user_id } from "../../api/Api";
import { authContext } from "../../api/authentication/authController";
import Part_Pers_Info from "./Part_Pers_Info";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "октябрь",
  "Ноябрь",
  "Декабрь",
];

function DatetoStr(date) {
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = String(date.getFullYear()).padStart(4, "0");

  return dd + " " + months[date.getMonth()] + " " + yyyy;
}

const Personal_Information = ({ userInfo, positionUser }) => {
  const [active, setActive] = useState(false);

  let fio = `${userInfo.firstName} ${userInfo.surname} ${
    userInfo.patronymic == null ? "" : userInfo.patronymic
  }`;
  let birthday = DatetoStr(new Date(userInfo.birthday));

  let myself = userInfo.aboutMyself;
  let iDid = userInfo.myDoings;
  let achievements = userInfo.skills; //??????????????????????
  let skillsAndCompetencies = userInfo.skills;

  let positions = [];
  positionUser.forEach((element) => {
    if (element.end == null) {
      positions.push({
        name: element.position.name,
        start: DatetoStr(new Date(element.start)),
      });
    }
  });

  return (
    <div className="column">
      <h2>{fio}</h2>
      <Part_Pers_Info title="дата рождения" value={birthday} />
      <span>
        <h5>должности</h5>
        <div className="row">
          {positions.map((element, index) => {
            return (
              <div key={index} className="column">
                <p>{element.name}</p>
                <small>{element.start}</small>
              </div>
            );
          })}
        </div>
      </span>
      {!active &&
        (typeof myself === "string" ||
          typeof iDid === "string" ||
          typeof achievements === "string" ||
          typeof skillsAndCompetencies === "string") && (
          <a role="button" onClick={() => {setActive(true);}}>
            Показать подробную инфромацию
          </a>
        )}
      {active &&
        (typeof myself === "string" ||
          typeof iDid === "string" ||
          typeof achievements === "string" ||
          typeof skillsAndCompetencies === "string") && (
          <div>
            {typeof myself == "string" && (
              <Part_Pers_Info title="о себе" value={myself} />
            )}
            {typeof iDid == "string" && (
              <Part_Pers_Info title="чем занимался" value={iDid} />
            )}
            {typeof achievements == "string" && (
              <Part_Pers_Info title="достижения" value={achievements} />
            )}
            {typeof skillsAndCompetencies == "string" && (
              <Part_Pers_Info
                title="навыки и компетенции"
                value={skillsAndCompetencies}
              />
            )}
            <a role="button" onClick={() => {setActive(false);}}>
              Скрыть подробную инфромацию
            </a>
          </div>
        )}
    </div>
  );
};
export default Personal_Information;
