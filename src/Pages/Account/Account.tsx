import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Button from "../../Components/Button/Button";
import CreateTidings from "../../Components/News/Create/CreateTidings";
import FeedNews from "../../Components/News/FeedNews";
import Personal_Information from "../../Components/Profile/Information/ProfileInformation";
import Profile_Navigation from "../../Components/Profile/Navigation/Profile_Navigation";
import Profile_Picture from "../../Components/Profile/Picture/Profile_Picture";
import API, { url_get_user_positions } from "../../Fetch/Api";
import authContext from "../../Constants/MyContext/MyContexts";
import User from "../../Helpers/User";
import "./pages.css";

export function accountLoader({ params }) {
  return params.id;
}

const Account = () => {
  const { authData } = useContext(authContext);
  const [active, setActive] = useState(false);
  const [updateNews, setUpdateNews] = useState({ update: null });
  const [user, setUser] = useState<User | null>(null);
  const [positionUser, setPositionUser] = useState<any | null>(null);

  const isLogin = authData.user ? authData.user.id === user.id : false;
  const id = useLoaderData();

  useEffect(() => {
    if (typeof id !== "string") return;
    API.getUser(id).then((user) => {
      setUser(user);
      API.getUserPositions(user.id).then((position) => {
        setPositionUser(position);
      });
    });
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
