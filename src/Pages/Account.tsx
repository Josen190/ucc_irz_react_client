import React, { useState, useContext, useEffect } from "react";
import { useLoaderData } from "react-router";
import API, { url_get_users_id, url_get_user_positions } from "../api/Api";
import { authContext } from "../api/authentication/authController";
import { getContext } from "../api/authentication/MyContexts";
import User from "../class/User";
import Button from "../Components/basic/Button";
import CreateTidings from "../Components/News/CreateTidings";
import FeedNews from "../Components/News/FeedNews";
import Personal_Information from "../Components/Profile/Personal_Information";
import Profile_Navigation from "../Components/Profile/Profile_Navigation";
import Profile_Picture from "../Components/Profile/Profile_Picture";
import "./pages.css";

export function accountLoader({ params }) {
  return params.id;
}

const Account = () => {
  const { authData } = getContext();
  const [active, setActive] = useState(false);
  const [updateNews, setUpdateNews] = useState({ update: null });
  const [user, setUser] = useState<User | null>(null);
  const [positionUser, setPositionUser] = useState<any | null>(null);

  const isLogin =
    typeof authData.myID === "string" ? authData.myID === user.id : false;

  useEffect(() => {
    const id = useLoaderData();
    if (typeof id !== "string") return;

    User.getUser(id).then((user) => {
      setUser(user);
    });
    API.get(url_get_user_positions, { params: { userId: id } }).then(
      (response) => {
        setPositionUser(response.data);
      }
    );
  }, []);

  return (
    <main className="account">
      <div className="tile ProfileHeader">
        <div className="margin-right">
          <Profile_Picture type="norm" image={user.image}></Profile_Picture>
          <Profile_Navigation
            isLogin={isLogin}
            userID={user.id}
            isSubcribe={user.isSubscription}
          ></Profile_Navigation>
        </div>
        <Personal_Information
          userInfo={user}
          positionUser={positionUser}
        ></Personal_Information>
      </div>
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
};

export default Account;
