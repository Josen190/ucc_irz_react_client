import React from "react";
import API from "Fetch/Api";
import User from "Helpers/User";
import CreateTidings from "Modules/CreateNewsForm";
import FeedNews from "Modules/News";
import UserCard from "Modules/UserCard";
import Button from "UI/Button/Button";

import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import News from "Helpers/News";
import { useAppSelector } from "Hooks";


export async function accountLoader({ params }: any) {
  if (typeof params.id !== "string") return;
    // const user: User = await API.getUser(params.id).then((user) => user);
  return params.id;
}

export default function Account() {
  const {isLogin, user: AuntificationuUser} = useAppSelector((s)=> s);
  const [active, setActive] = useState(false);
  const [updateNews, setUpdateNews] = useState<(news: News) => void>();
  const [user, setUser] = useState<User | null>(null);
  const [positionUser, setPositionUser] = useState<any | null>(null);



  useEffect(() => {
    const userId = useLoaderData() as string;
    if (AuntificationuUser?.id !== userId){
      API.getUser(userId).then((_user) => setUser(_user))
      API.getUserPositions(userId).then((position) => setPositionUser(position));
    }
    
  }, []);

  console.log(active);
  
  return (
    <main className="account">
      <UserCard user={user} isLogin={isLogin} />
      <div className="">
        {isLogin && (
          <div className="tile">
            <Button
              type="button"
              onClick={() => setActive(true)}
            >
              Создать новость
            </Button>
          </div>
        )}
        {user && <FeedNews userID={user.id} setUpdate={setUpdateNews} />}
      </div>
      {active && (
        <CreateTidings setActive={setActive} updateNews={updateNews} />
      )}
    </main>
  );
}


