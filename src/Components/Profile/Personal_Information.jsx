import React, { useState } from "react";
import { useContext } from "react";
import API, { url_user_id } from "../../api/Api";
import { authContext } from "../../api/authentication/authController";
import Part_Pers_Info from "./Part_Pers_Info";

function DatetoStr(date){
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = date.getFullYear();

  return mm + ' ' + dd + ' ' + yyyy;
}

const Personal_Information = ({userInfo}) => {
  const [active, setActive] = useState(false);

  let fio = `${userInfo.firstName} ${userInfo.surname} ${userInfo.patronymic == null ? '' : userInfo.patronymic}`;
  let birthday = DatetoStr(new Date(userInfo.birthday));
  let dateReceptPosition =  DatetoStr(new Date(userInfo.birthday)); //?????????????
  let position = userInfo.position;
  let myself = userInfo.aboutMyself;
  let iDid = userInfo.myDoings;
  let achievements = userInfo.skills; //??????????????????????
  let skillsAndCompetencies =userInfo.skills;

  return (
    <div className="column">
      <h2>{fio}</h2>
      <Part_Pers_Info title="дата рождения" value={birthday} />
      <Part_Pers_Info title="должность" value={position} />
      <Part_Pers_Info
        title="дата вступления в должность"
        value={dateReceptPosition}
      />
      {!active && <a role='button' onClick={()=>{setActive(true)}}> Показать подробную инфромацию</a>}
      {active && <div>
      <Part_Pers_Info title="о себе" value={myself} />
      <Part_Pers_Info title="чем занимался" value={iDid} />
      <Part_Pers_Info title="достижения" value={achievements} />
      <Part_Pers_Info
        title="навыки и компетенции"
        value={skillsAndCompetencies}
      />
      <a role='button' onClick={()=>{setActive(false)}}> Скрыть подробную инфромацию</a>
        </div>}
      
    </div>
  );
};
export default Personal_Information;
