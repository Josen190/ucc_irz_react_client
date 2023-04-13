import React, { useState } from "react";
import BlockInfo from "../../../../UI/BlockInfo/BlockInfo";
import MyDate from "../../../../Helpers/MyDate";
import User from "../../../../Helpers/User";
import PositionList from "../PositionList/PositionList";
import DetailedInfo from "../DetailedInfo/DetailedInfo";
import Button from "UI/Button/Button";

interface Props {
  user: User
}

const Personal_Information = ({ user }: Props) => {
  const [active, setActive] = useState(false);

  const fio = `${user.firstName} ${user.surname} ${user.patronymic == null ? "" : user.patronymic
    }`;
  const birthday = new MyDate(user.birthday).DatetoStr("dd-months-yyyy");

  const myself = user.aboutMyself;
  const iDid = user.myDoings;
  const achievements = user.skills; //??????????????????????
  const skillsAndCompetencies = user.skills;

  const isDetailedInfo = (myself || iDid || achievements || skillsAndCompetencies);

  return (
    <div className="column">
      <h2>{fio}</h2>
      <BlockInfo title="Дата рождения" value={birthday} />
      <BlockInfo title="Должности" value={<PositionList positions={user.positions} />} />
      {!active && isDetailedInfo && (
        <Button
          type="button"
          stale="link"
          onClick={() => {
            setActive(true);
          }}
        >Показать подробную инфромацию</Button>
      )}
      {active && isDetailedInfo && (
        <DetailedInfo
          setActive={setActive}
          myself={myself ?? undefined}
          iDid={iDid ?? undefined}
          achievements={achievements ?? undefined}
          skillsAndCompetencies={skillsAndCompetencies ?? undefined} />
      )}
    </div>
  );
};
export default Personal_Information;
