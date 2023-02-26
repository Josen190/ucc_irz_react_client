import React, { Component, useState, useContext } from "react";
import Personal_Information from "../Components/Profile/Personal_Information";
import Profile_Navigation from "../Components/Profile/Profile_Navigation";
import Profile_Picture from "../Components/Profile/Profile_Picture";
import Tidings from "../Components/News/Tidings";
import Button from "../Components/basic/Button";
import CreateTidings from "../Components/News/CreateTidings";
import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";
import "./pages.css";
import User from "./User";
import { authContext } from "../api/authentication/authController";
import { Navigate, useLoaderData } from "react-router";
import API, { catchApi, url_user_id } from "../api/Api";
import axios from "axios";
import FeedNews from "../Components/News/FeedNews";

export async function accountLoader ({params}) {

  const res = await API.get(url_user_id(params.id)).catch((error) => catchApi(error));
  console.log(res);

  return res ? res.data : null ;
  
}

const Account = () => {
  const [active, setActive] = useState(false);
  const result = useLoaderData();
  console.log(result);

  return (
      <main className="account">
        <div className="tile ProfileHeader">
          <div className="margin-right">
            <Profile_Picture type="norm"></Profile_Picture>
            <Profile_Navigation></Profile_Navigation>
          </div>
          <Personal_Information userInfo={result}></Personal_Information>
        </div>
        <div className="">
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
          <FeedNews userID={result.id}/>
        </div>
        {active && <CreateTidings setActive={setActive} />}
      </main>

  );
};

export default Account;
