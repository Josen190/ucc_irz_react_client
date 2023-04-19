import API from "Fetch/*";
import MinUser from "Helpers/MinUser";
import User from "Helpers/User";
import Button from "UI/Button/Button";
import InputField from "UI/InputField/InputField";
import UserVisitingCard from "Components/UserVisitingCard/UserVisitingCard";
import { useState, useEffect } from "react";

interface PropsPushUser{
  user: User;
  pushFun: (user: MinUser) => void;
}

function PushUser({ user, pushFun }: PropsPushUser) {
  return (
    <div className="row">
      <UserVisitingCard user={user}></UserVisitingCard>
      <Button type="button" onClick={() => pushFun(user)}>
        Добавить
      </Button>
    </div>
  );
}

export default function FormSearchUser(): JSX.Element {
  const [searchString, setSearchString] = useState<string>();
  const [isActive, setIsActive] = useState<boolean>();
  const [role, setRole] = useState<string>();
  const [positionId, setPositionId] = useState<string>();
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
    
    API.getUsers(pageIndex, searchString, isActive, role, positionId).then(
      (users) => {
        let _users = new Map();
        users.forEach((user: User) => {
          _users.set(
            user.id,
            <PushUser key={user.id} user={user} pushFun={pushUsers} />
          );
        });

        setUsers(_users);
      }
    );
  };

  useEffect(getUsers, [pageIndex, searchString, isActive, role, positionId]);

  useEffect(() => {
    if (userIdTmp !== null) {
      setSelectUsers(
        new Map(selctUsers.entries()).set(
          userIdTmp.id,
          <UserVisitingCard key={userIdTmp.id} user={userIdTmp} />
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
