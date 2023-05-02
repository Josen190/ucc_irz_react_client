import React from "react";

import Employee from "Helpers/Employee";
import FeedNews from "Modules/News";
import UserCard from "Modules/UserCard";
import Button from "UI/Button/Button";

import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import News from "Helpers/News";
import { useAppSelector } from "Hooks";

import "./Account.scss";
import getUserFromId from "Fetch/getUserfromId";
import getUserPositions from "Fetch/getUserPositions";

export async function accountLoader({ params }: any) {
  return params.id;
}

export default function Account() {
  const { isLogin, user: ParamsUser } = useAppSelector((s) => s.authorization);
  const AuntificationuUser = ParamsUser ? new Employee(ParamsUser) : null;
  const [user, setUser] = useState<Employee | null>(null);
  const [positionUser, setPositionUser] = useState<any | null>(null);

  const userId = useLoaderData() as string;

  useEffect(() => {
    if (AuntificationuUser?.id !== userId) {
      getUserFromId(userId).then((_user) => setUser(_user))
      getUserPositions(userId).then((position) => setPositionUser(position));
    } else if (AuntificationuUser.id === userId) {
      setUser(AuntificationuUser);
    }

  }, []);

  return (
    <main className="account">
      {user && <UserCard user={user} isLogin={isLogin} />}
      <FeedNews inAccount={true} userId={userId} />
    </main>
  );
}


