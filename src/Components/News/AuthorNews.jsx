import React, { Component } from "react";
import Profile_Picture from "../Profile/Profile_Picture";
import { Link } from "react-router-dom";

export default function Author({ user }) {
  const _firstName = user.firstName;
  const _surname = user.surname;
  const _patronymic = user.patronymic == null ? "" : user.patronymic;
  const _authorID = user.id;

  const nameAuthorNews = `${_firstName} ${_surname} ${_patronymic}`;
  return (
    <Link to={`/account/${_authorID}`} className="row">
      <Profile_Picture type="mini"></Profile_Picture>
      <h4>{nameAuthorNews}</h4>
    </Link>
  );
}
