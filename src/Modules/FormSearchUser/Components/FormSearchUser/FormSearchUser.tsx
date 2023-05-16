import InputField from "UI/InputField/InputField";
import React, { useState, useEffect, SetStateAction } from "react";
import useGetUsers from "../../Hooks/useGetUsers";



interface Props{
  setSelected: React.Dispatch<SetStateAction<string[]>>
}

export default function FormSearchUser({setSelected}: Props): JSX.Element {
  const [searchString, setSearchString] = useState<string | undefined>();

  const {users, selectedUsers} = useGetUsers(searchString);

  useEffect(() =>{
    setSelected(selectedUsers.map(JUser => JUser.props.user.id as string))
  }, [selectedUsers])

  return (
    <div>
        <p>Добавить сотрудников</p>
      <div>
        <InputField
          type="text"
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        ></InputField>
      </div>
        {selectedUsers.length > 0 && <div className="select-user">{selectedUsers}</div>}
      <div>{users}</div>
    </div>
  );
}
