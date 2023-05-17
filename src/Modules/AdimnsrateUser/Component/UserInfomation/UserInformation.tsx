import PositionList from "Components/PositionList/PositionList";
import MyDate from "Helpers/MyDate";
import User from "Helpers/User";
import BlockInfo from "UI/BlockInfo/BlockInfo";
import React from "react";
import parseMyRole from "../../Helpers/parseMyRole";
import "./UserInformation.scss";

interface Props {
    user: User ;
}

const UserInformation = ({ user }: Props) => {

    const fio = user ? user.getFullName() : null;
    const role = parseMyRole(user && user.roles ? user.roles : []);
    const email = user ? user.email : '';
    const birthday = user ? new MyDate(user.birthday).DatetoStr("dd-months-yyyy") : null;
    const myself = user ? user.aboutMyself : null;
    const iDid = user ? user.myDoings : null;
    const achievements = user ? user.skills : null; //??????????????????????
    const skillsAndCompetencies = user ? user.skills : null;


    return (
        <div className="user-info">
            <h2>{fio}</h2>
            <div className="info">
                <div>
                    <BlockInfo title="Роли" value={role} />
                    <BlockInfo title="Почта" value={email} />
                    <BlockInfo title="Дата рождения" value={birthday} />
                    <BlockInfo title="Должности" value={<PositionList positions={user ? user.positions : null} />} />
                </div>
                <div>
                    <BlockInfo title="о себе" value={myself} />
                    <BlockInfo title="чем занимался" value={iDid} />
                    <BlockInfo title="достижения" value={achievements} />
                    <BlockInfo title="навыки и компетенции" value={skillsAndCompetencies} />
                </div>
            </div>
        </div>
    );
};
export default UserInformation;
