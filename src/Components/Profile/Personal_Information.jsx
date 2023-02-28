import React, { useState } from "react";
import { useContext } from "react";
import API, { url_user_id } from "../../api/Api";
import { authContext } from "../../api/authentication/authController";
import Part_Pers_Info from "./Part_Pers_Info";


function DatetoStr(date) {
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = date.getFullYear();

  return dd + "." + mm + "." + yyyy;
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
  console.log(positionUser);
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
        {positions.map((element, index) => {
          return (<div key={index} className='column'>
            <p>{element.name}</p>
            <small>{element.start}</small>
          </div>);
        })}
      </span>
      {!active && (
        <a
          role="button"
          onClick={() => {
            setActive(true);
          }}
        >
          {" "}
          Показать подробную инфромацию
        </a>
      )}
      {active && (
        <div>
          <Part_Pers_Info title="о себе" value={myself} />
          <Part_Pers_Info title="чем занимался" value={iDid} />
          <Part_Pers_Info title="достижения" value={achievements} />
          <Part_Pers_Info
            title="навыки и компетенции"
            value={skillsAndCompetencies}
          />
          <a
            role="button"
            onClick={() => {
              setActive(false);
            }}
          >
            {" "}
            Скрыть подробную инфромацию
          </a>
        </div>
      )}
    </div>
  );
};
export default Personal_Information;
