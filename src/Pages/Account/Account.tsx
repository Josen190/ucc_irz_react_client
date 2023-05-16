import React from "react";
import User from "Helpers/User";
import FeedNews from "Modules/News";
import UserCard from "Modules/UserCard";

import { useState, useEffect } from "react";
import {useParams} from "react-router";
import { useAppSelector } from "Hooks";

import "./Account.scss";
import getUserFromId from "Fetch/getUserfromId";


export default function Account() {
  const { user: ParamsUser } = useAppSelector((s) => s.authorization);
  const AuntificationuUser = ParamsUser ? new User(ParamsUser) : null;
  const [user, setUser] = useState<User | null>(null);

  const { userId } = useParams<{ userId: string }>();
  if (!userId) return <></>


  useEffect(() => {
    if (AuntificationuUser?.id !== userId) {
      getUserFromId(userId).then((_user) => setUser(_user))
    } else if (AuntificationuUser.id === userId) {
      setUser(AuntificationuUser);
    }

  }, [userId]);

  const isLogin = user ? user.isAuntification() : false;

  return (
    <main className="account">
      {user && <UserCard user={user} isMyProfile={isLogin} />}
      <FeedNews inAccount={true} userId={userId} />
    </main>
  );
}


