import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router";
import API, { url_get_users_id, url_get_user_positions } from "../api/Api";
import { authContext } from "../api/authentication/authController";
import Button from "../Components/basic/Button";
import CreateTidings from "../Components/News/CreateTidings";
import FeedNews from "../Components/News/FeedNews";
import Personal_Information from "../Components/Profile/Personal_Information";
import Profile_Navigation from "../Components/Profile/Profile_Navigation";
import Profile_Picture from "../Components/Profile/Profile_Picture";
import "./pages.css";

export async function accountLoader({ params }) {
  const info_user = await API.get(url_get_users_id(params.id)).catch((error) => {});
  const position_user = await API.get(url_get_user_positions, {params: {userId: params.id}}).catch((error) => {});
  const data = {
    info_user: info_user ? info_user.data : null,
    position_user: position_user ? position_user.data : null,
  }

  return data;
}

const Account = () => {
  const { authData } = useContext(authContext); 
  const [active, setActive] = useState(false);
  const [updateNews, setUpdateNews] = useState({update: null});

  const data = useLoaderData();
  const info_user = data.info_user;
  const position_user = data.position_user;
  const isLogin = typeof(authData.myID) === 'string'? authData.myID === info_user.id : false;

  return (
    <main className="account">
      <div className="tile ProfileHeader">
        <div className="margin-right">
          <Profile_Picture type="norm"></Profile_Picture>
          <Profile_Navigation isLogin={isLogin} userID={info_user.id} isSubcribe={info_user.isSubscription}></Profile_Navigation>
        </div>
        <Personal_Information userInfo={info_user} positionUser={position_user}></Personal_Information>
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
        <FeedNews userID={info_user.id} setUpdate={setUpdateNews}/>
      </div>
      {active && <CreateTidings setActive={setActive} updateNews={updateNews}/>}
    </main>
  );
};

export default Account;
