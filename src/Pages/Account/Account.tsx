
import API from "Fetch/Api";
import User from "Helpers/User";
import { authContext, IAuthContext } from "Modules/AuthController";
import CreateTidings from "Modules/CreateNewsForm";
import FeedNews from "Modules/News";
import UserCard from "Modules/UserCard";
import Button from "UI/Button/Button";

import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router";


export async function accountLoader({ params }: any) {
  if (typeof params.id !== "string") return;
    const api = new API();
    const user: User = await api.getUser(params.id).then((user) => user);
    
  return user;
}

export default function Account() {
  const { authData } = useContext(authContext) as IAuthContext;
  const [active, setActive] = useState(false);
  const [updateNews, setUpdateNews] = useState<() => void>();
  // const [user, setUser] = useState<User>();
  const [positionUser, setPositionUser] = useState<any | null>(null);

  const user = useLoaderData() as User;
  const isLogin = authData && authData.user? authData.user.id === user.id : false;

  useEffect(() => {
    const api = new API();
    api.getUserPositions(user.id).then((position) => positionUser(position));
  }, []);


  return (
    <main className="account">
      <UserCard user={user} isLogin={isLogin} />
      <div className="">
        {isLogin && (
          <div className="tile">
            <Button
              type="button"
              onClick={() => {
                setActive(true);
              }}
            >
              Создать новость
            </Button>
          </div>
        )}
        <FeedNews userID={user.id} setUpdate={setUpdateNews} />
      </div>
      {active && (
        <CreateTidings setActive={setActive} updateNews={updateNews} />
      )}
    </main>
  );
}


