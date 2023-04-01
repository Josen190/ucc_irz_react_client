import React, { useState } from "react";
import Part_Pers_Info from "./Part_Pers_Info";
import MyDate from "../../../Helpers/MyDate";

const Personal_Information = ({ userInfo, positionUser }) => {
  const [active, setActive] = useState(false);

  const fio = `${userInfo.firstName} ${userInfo.surname} ${
    userInfo.patronymic == null ? "" : userInfo.patronymic
  }`;
  const birthday = new MyDate(userInfo.birthday).DatetoStr("dd-months-yyyy");

  const myself = userInfo.aboutMyself;
  const iDid = userInfo.myDoings;
  const achievements = userInfo.skills; //??????????????????????
  const skillsAndCompetencies = userInfo.skills;

  let positions = [];
  positionUser.forEach((element) => {
    if (element.end == null) {
      positions.push({
        name: element.position.name,
        start: new MyDate(element.start).DatetoStr("dd-months-yyyy"),
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
          <a
            role="button"
            onClick={() => {
              setActive(true);
            }}
          >
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
            <a
              role="button"
              onClick={() => {
                setActive(false);
              }}
            >
              Скрыть подробную инфромацию
            </a>
          </div>
        )}
    </div>
  );
};
export default Personal_Information;
