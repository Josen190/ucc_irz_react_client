import React, { Component } from "react";
import Profile_Picture from "../Profile/Profile_Picture";
import { Link } from "react-router-dom";

export default function Author({ author }) {
  const _firstName = author.firstName;
  const _surname = author.surname;
  const _patronymic = author.patronymic == null ? "" : author.patronymic;
  const _authorID = author.id;

  const nameAuthorNews = `${_firstName} ${_surname} ${_patronymic}`;
  return (
    <Link to={`/account/${_authorID}`} className="row">
      <Profile_Picture type="mini"></Profile_Picture>
      <h4>{nameAuthorNews}</h4>
    </Link>
  );
}
