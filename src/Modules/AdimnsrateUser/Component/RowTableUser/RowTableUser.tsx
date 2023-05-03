import User from "Helpers/User";
import { useAppDispatch } from "Hooks";
import { setUser } from "../../Reducers/UserAdministrationReduser";
import Button from "UI/Button/Button";
import React from "react";

interface Props {
  user: User;
}


function RowTableUser({ user }: Props) {
  const dispatch = useAppDispatch();

  const open = () => {
    dispatch(setUser({ user: user.getParams() }))
  };

  return (

    <tr onClick={open}>
      <td>{user.getFullName()}</td>
      <td>{user.email}</td>
      <td>{user.roles.join(", ")}</td>
    </tr>
  );
}

export default RowTableUser;
