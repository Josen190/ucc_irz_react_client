import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router";
import API, { url_user_id, url_user_positions } from "../api/Api";
import { authContext } from "../api/authentication/authController";
import Button from "../Components/basic/Button";
import CreateTidings from "../Components/News/CreateTidings";
import FeedNews from "../Components/News/FeedNews";
import Personal_Information from "../Components/Profile/Personal_Information";
import Profile_Navigation from "../Components/Profile/Profile_Navigation";
import Profile_Picture from "../Components/Profile/Profile_Picture";
import "./pages.css";

export async function accountLoader({ params }) {
  const info_user = await API.get(url_user_id(params.id)).catch((error) => {});
  const position_user = await API.get(url_user_positions, {params: {userId: params.id}}).catch((error) => {});
  const data = {
    info_user: info_user ? info_user.data : null,
    position_user: position_user ? position_user.data : null,
  }

  return data;
}

const Account = () => {
  const [active, setActive] = useState(false);
  const { authData } = useContext(authContext); 
  const data = useLoaderData();
  const info_user = data.info_user;
  const position_user = data.position_user;
  let isLogin = authData.myID === info_user.id ? authData.myID !== null : false;
  console.log(isLogin);

  return (
    <main className="account">
      <div className="tile ProfileHeader">
        <div className="margin-right">
          <Profile_Picture type="norm"></Profile_Picture>
          <Profile_Navigation isLogin={isLogin}></Profile_Navigation>
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
        <FeedNews userID={info_user.id} />
      </div>
      {active && <CreateTidings setActive={setActive} />}
    </main>
  );
};

export default Account;
