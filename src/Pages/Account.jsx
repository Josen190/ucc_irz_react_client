import React, { Component, useState } from "react";
import Personal_Information from "../Components/Profile/Personal_Information";
import Profile_Navigation from "../Components/Profile/Profile_Navigation";
import Profile_Picture from "../Components/Profile/Profile_Picture";
import Tidings from "../Components/News/Tidings";
import Button from "../Components/basic/Button";
import CreateTidings from "../Components/News/CreateTidings";
import "./pages.css";

const Account = () => {
  const [active, setActive] = useState(false);

  return (
    <main className="account">
      <div className="tile ProfileHeader">
        <div className="margin-right">
          <Profile_Picture type="norm"></Profile_Picture>
          <Profile_Navigation></Profile_Navigation>
        </div>
        <Personal_Information></Personal_Information>
      </div>
      <div className="">
          <div className="tile">
            <Button
              type="button"
              value="Создать новость"
              onClick={() => {
                setActive(true);
              }}
            />
          </div>
          <Tidings></Tidings>
      </div>
      {active && <CreateTidings setActive={setActive} />}
    </main>
  );
};

export default Account;
