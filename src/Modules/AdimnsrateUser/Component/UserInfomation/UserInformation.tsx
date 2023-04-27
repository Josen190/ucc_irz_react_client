import PositionList from "Components/PositionList/PositionList";
import MyDate from "Helpers/MyDate";
import User from "Helpers/User";
import BlockInfo from "UI/BlockInfo/BlockInfo";
import React, { useState } from "react";
import parseMyRole from "../../Helpers/parseMyRole";

interface Props {
    user: User | null;
}

const UserInformation = ({ user }: Props) => {

    const fio = user ? user.getFullName() : null;
    const role = parseMyRole(user && user.roles ? user.roles : []);
    const birthday = user ? new MyDate(user.birthday).DatetoStr("dd-months-yyyy") : null;
    const myself = user ? user.aboutMyself : null;
    const iDid = user ? user.myDoings : null;
    const achievements = user ? user.skills : null; //??????????????????????
    const skillsAndCompetencies = user ? user.skills : null;


    return (
        <div className="column">
            <h2>{fio}</h2>
            <BlockInfo title="Роли" value={role} />
            <BlockInfo title="Дата рождения" value={birthday} />
            <BlockInfo title="Должности" value={<PositionList positions={user ? user.positions : null} />} />
            <BlockInfo title="о себе" value={myself} />
            <BlockInfo title="чем занимался" value={iDid} />
            <BlockInfo title="достижения" value={achievements} />
            <BlockInfo title="навыки и компетенции" value={skillsAndCompetencies} />

        </div>
    );
};
export default UserInformation;
