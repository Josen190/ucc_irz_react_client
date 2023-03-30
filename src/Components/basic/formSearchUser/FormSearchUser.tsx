import React, { useEffect, useState } from "react";
import API, { url_get_users } from "../../../api/Api";
import Author from "../../News/AuthorNews";
import PushUser from "../../Profile/PushUser/PushUser";
import InputField from "../InputField";

const FormSearchUser = () => {
  const [searchString, setSearchString] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const [role, setRole] = useState(null);
  const [positionId, setPositionId] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);

  const [users, setUsers] = useState(new Map());
  const [selctUsers, setSelectUsers] = useState(new Map());
  const [userIdTmp, setUserIdTmp] = useState(null);
  const pageSize = 10;

  const pushUsers = (user) => {
    setUserIdTmp(user);
  };

  const getUsers = () => {
    const params = {};
    if (typeof searchString === "string") params.SearchString = searchString;
    if (typeof isActive === "boolean") params.IsActive = isActive;
    if (typeof role === "string") params.Role = role;
    if (typeof positionId === "string") params.PositionId = positionId;

    params.PageIndex = pageIndex;
    params.PageSize = pageSize;

    API.get(url_get_users, {}, params).then((response) => {
      let _users = new Map(users);
      response.data.forEach((user) => {
        _users.set(
          user.id,
          <PushUser key={user.id} user={user} pushFun={pushUsers} />
        );
      });

      setUsers(_users);
    });
  };

  useEffect(getUsers, [pageIndex, searchString, isActive, role, positionId]);

  useEffect(() => {
    if (userIdTmp !== null) {
      setSelectUsers(
        new Map(selctUsers.entries()).set(
          userIdTmp.id,
          <Author key={userIdTmp.id} user={userIdTmp} />
        )
      );
      let _users = new Map(users);
      _users.delete(userIdTmp.id);
      setUsers(_users);
    }
  }, [userIdTmp]);

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
      <div>{Array.from(selctUsers.values())}</div>
      <div>{Array.from(users.values())}</div>
    </div>
  );
};

export default FormSearchUser;
