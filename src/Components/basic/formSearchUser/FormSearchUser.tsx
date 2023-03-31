import React, { useEffect, useState } from "react";
import API, { url_get_users } from "../../../api/Api";
import { MinUser } from "../../../class/User";
import Author from "../../News/AuthorNews";
// import PushUser from "../../Profile/PushUser/PushUser";
import InputField from "../InputField";
import Button from "../../basic/Button";

function PushUser({ user, pushFun }) {
  return (
    <div className="row">
      <Author user={user}></Author>
      <Button type="button" onClick={() => pushFun(user)}>
        Добавить
      </Button>
    </div>
  );
}

export default function FormSearchUser(): JSX.Element {
  const [searchString, setSearchString] = useState<string | null>(null);
  const [isActive, setIsActive] = useState<boolean | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [positionId, setPositionId] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState<number>(0);

  const [users, setUsers] = useState<Map<string, JSX.Element>>(new Map());
  const [selctUsers, setSelectUsers] = useState<Map<string, JSX.Element>>(
    new Map()
  );
  const [userIdTmp, setUserIdTmp] = useState<MinUser | null>(null);
  const pageSize = 10;

  const pushUsers = (user: MinUser) => {
    setUserIdTmp(user);
  };

  const getUsers = () => {
    const params: { [key: string]: string | number | boolean } = {};
    if (typeof searchString === "string") params.SearchString = searchString;
    if (typeof isActive === "boolean") params.IsActive = isActive;
    if (typeof role === "string") params.Role = role;
    if (typeof positionId === "string") params.PositionId = positionId;

    params.PageIndex = pageIndex;
    params.PageSize = pageSize;

    API.get(url_get_users, {
      params: params,
    }).then((response) => {
      let _users = new Map(users);
      response.data.forEach((user: MinUser) => {
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
}
