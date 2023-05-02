import React from "react";
import Profile_Picture from "../Avatar/Avatar";
import { Link } from "react-router-dom";
import User from "../../Helpers/User";

interface PropsAuthor {
  user: User;
}

export default function UserVisitingCard({ user }: PropsAuthor): JSX.Element {
  return (
    <Link to={`/account/${user.id}`} className="row">
      <Profile_Picture type="mini" image={user.image}></Profile_Picture>
      <h4>{user.getFullName()}</h4>
    </Link>
  );
}
