import React, { Component } from "react";
import Profile_Picture from "../Profile/Profile_Picture";
import { Link } from "react-router-dom";
import Image from "../../class/Image";
import { MinUser } from "../../class/User";

interface PropsAuthor {
  user: MinUser
}

export default function Author({ user }: PropsAuthor) : JSX.Element {
  return (
    <Link to={`/account/${user.id}`} className="row">
      <Profile_Picture type="mini" image={user.image}></Profile_Picture>
      <h4>{user.getFullName()}</h4>
    </Link>
  );
}
