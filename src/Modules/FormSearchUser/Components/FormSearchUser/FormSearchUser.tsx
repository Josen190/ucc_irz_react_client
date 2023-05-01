import MinUser from "Helpers/MinUser";
import User from "Helpers/User";
import Button from "UI/Button/Button";
import InputField from "UI/InputField/InputField";
import React, { useState, useEffect, SetStateAction } from "react";
import useGetUsers from "../../Hooks/useGetUsers";



interface Props{
  setSelected: React.Dispatch<SetStateAction<string[]>>
}

export default function FormSearchUser({setSelected}: Props): JSX.Element {
  const [searchString, setSearchString] = useState<string>();
  const [isActive, setIsActive] = useState<boolean>();
  const [role, setRole] = useState<string>();
  const [positionId, setPositionId] = useState<string>();

  const {users, selectedUsers} = useGetUsers();

  useEffect(() =>{
    setSelected(selectedUsers.map(JUser => JUser.props.user.id as string))
  }, [selectedUsers])

  return (
    <div>
      <div>
        <InputField
          type="text"
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        ></InputField>
      </div>
      <div>{selectedUsers}</div>
      <div>{users}</div>
    </div>
  );
}
