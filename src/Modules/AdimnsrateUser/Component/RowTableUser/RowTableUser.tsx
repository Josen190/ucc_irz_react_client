import Employee from "Helpers/Employee";
import { useAppDispatch } from "Hooks";
import { setUser } from "../../Reducers/UserAdministrationReduser";
import Button from "UI/Button/Button";
import React from "react";

interface Props {
  user: Employee;
}


function RowTableUser({ user }: Props) {
  const dispatch = useAppDispatch();

  const open = () => {
    dispatch(setUser({ user: user.getType() }))
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
