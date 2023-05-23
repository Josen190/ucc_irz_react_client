import React, { useState } from "react";
import BlockInfo from "../../../../UI/BlockInfo/BlockInfo";
import MyDate from "../../../../Helpers/MyDate";
import User from "../../../../Helpers/User";

import DetailedInfo from "../DetailedInfo/DetailedInfo";
import Button from "UI/Button/Button";
import PositionList from "Components/PositionList/PositionList";
import {useNavigate} from "react-router-dom";

interface Props {
  user: User;
}

const Personal_Information = ({ user }: Props) => {
  const [active, setActive] = useState(false);
  const fio = user ? user.getFullName() : null;
  const birthday = user ? new MyDate(user.birthday).DatetoStr("dd-months-yyyy") : null;
  const myself = user ? user.aboutMyself : null;
  const iDid = user ? user.myDoings : null;
  const skills = user ? user.skills : null;

  const isDetailedInfo = (myself || iDid || skills);

  const navigate = useNavigate();

  return (
    <div className="column">
      <h2>{fio}</h2>
      <BlockInfo title="Дата рождения" value={birthday} />
      <div onClick={() => navigate("./positions")}>
          <BlockInfo title="Должности" value={<PositionList positions={user ? user.positions : null} />} />
      </div>
      {!active && isDetailedInfo && (
        <Button
          type="button"
          stale="link"
          onClick={() => {
            setActive(true);
          }}
        >Показать подробную информацию</Button>
      )}
      {active && isDetailedInfo && (
        <DetailedInfo
          setActive={setActive}
          myself={myself ?? undefined}
          iDid={iDid ?? undefined}
          skills={skills ?? undefined} />
      )}
    </div>
  );
};
export default Personal_Information;
