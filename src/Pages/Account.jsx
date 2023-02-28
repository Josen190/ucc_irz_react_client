import React, { Component, useState, useContext } from "react";
import Personal_Information from "../Components/Profile/Personal_Information";
import Profile_Navigation from "../Components/Profile/Profile_Navigation";
import Profile_Picture from "../Components/Profile/Profile_Picture";
import Button from "../Components/basic/Button";
import CreateTidings from "../Components/News/CreateTidings";
import "./pages.css";
import { Navigate, useLoaderData } from "react-router";
import API, { url_user_id } from "../api/Api";
import FeedNews from "../Components/News/FeedNews";
import { authContext } from "../api/authentication/authController";

export async function accountLoader({ params }) {
  const res = await API.get(url_user_id(params.id)).catch((error) => {});

  return res ? res.data : null;
}

const Account = () => {
  const [active, setActive] = useState(false);
  const { authData } = useContext(authContext);
  const result = useLoaderData();
  let isLogin = authData.myID === result.id ? authData.myID !== null : false;
  console.log(isLogin);

  return (
    <main className="account">
      <div className="tile ProfileHeader">
        <div className="margin-right">
          <Profile_Picture type="norm"></Profile_Picture>
          <Profile_Navigation isLogin={isLogin}></Profile_Navigation>
        </div>
        <Personal_Information userInfo={result}></Personal_Information>
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
        <FeedNews userID={result.id} />
      </div>
      {active && <CreateTidings setActive={setActive} />}
    </main>
  );
};

export default Account;
