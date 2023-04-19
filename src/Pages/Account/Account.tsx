import React from "react";
import API from "Fetch/Api";
import User from "Helpers/User";
import CreateTidings from "Modules/CreateNewsForm";
import FeedNews from "Modules/News";
import UserCard from "Modules/UserCard";
import Button from "UI/Button/Button";

import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import News from "Helpers/News";
import { useAppSelector } from "Hooks";

import "./Account.scss";

export async function accountLoader({ params }: any) {
  if (typeof params.id !== "string") return;
    // const user: User = await API.getUser(params.id).then((user) => user);
  return params.id;
}

export default function Account() {
  const {isLogin, user: AuntificationuUser} = useAppSelector((s)=> s.authorization);
  const [user, setUser] = useState<User | null>(null);
  const [positionUser, setPositionUser] = useState<any | null>(null);

  const userId = useLoaderData() as string;

  useEffect(() => {
    if (AuntificationuUser?.id !== userId){
      API.getUser(userId).then((_user) => setUser(_user))
      API.getUserPositions(userId).then((position) => setPositionUser(position));
    }else if (AuntificationuUser.id === userId){
      setUser(AuntificationuUser);
    }
    
  }, []);
  
  return (
    <main className="account">
      <UserCard user={user} isLogin={isLogin} />
      {user && <FeedNews userID={user.id}/>}
    </main>
  );
}


