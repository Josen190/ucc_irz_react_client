import React, { useState } from "react";
import BlockInfo from "../../../../UI/BlockInfo/BlockInfo";
import MyDate from "../../../../Helpers/MyDate";
import User from "../../../../Helpers/User";

import DetailedInfo from "../DetailedInfo/DetailedInfo";
import Button from "UI/Button/Button";
import PositionList from "Components/PositionList/PositionList";

interface Props {
  user: User | null;
}

const Personal_Information = ({ user }: Props) => {
  const [active, setActive] = useState(false);
  const fio = user ? user.getFullName() : null;
  const role = user && user.roles ? user.roles.join(" ") : null;
  const birthday = user ? new MyDate(user.birthday).DatetoStr("dd-months-yyyy") : null;
  const myself = user ? user.aboutMyself : null;
  const iDid = user ? user.myDoings : null;
  const achievements = user ? user.skills : null; //??????????????????????
  const skillsAndCompetencies = user ? user.skills : null;

  const isDetailedInfo = (myself || iDid || achievements || skillsAndCompetencies);

  return (
    <div className="column">
      <h2>{fio}</h2>
      <BlockInfo title="Роли" value={role}></BlockInfo>
      <BlockInfo title="Дата рождения" value={birthday} />
      <BlockInfo title="Должности" value={<PositionList positions={user ? user.positions : null} />} />
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
