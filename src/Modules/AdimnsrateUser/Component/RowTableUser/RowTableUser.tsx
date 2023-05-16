import User from "Helpers/User";
import React from "react";
import {useNavigate} from "react-router-dom";
import {arrayRole} from "../../../../Constatnts/role";

interface Props {
  user: User;
}


function RowTableUser({ user }: Props) {
  const navigate = useNavigate()

  const open = () => {
      navigate(`./${user.id}`);
  };

  return (

    <tr onClick={open}>
      <td>{user.getFullName()}</td>
      <td>{user.email}</td>
      <td>{user.roles.map((v) => {
          return arrayRole.find((el) => el.Id === v)?.name;
      }).join(", ")}</td>
    </tr>
  );
}

export default RowTableUser;
