import React, { Component } from "react";
import Profile_Picture from "../Profile/Profile_Picture";
import { Link } from "react-router-dom";

export default class AuthorNews extends Component {
  render() {
    let nameAuthorNews = "Захаров Вячеслав Сергеевич";

    return (
      <Link to="/account" className="row">
        <Profile_Picture type="mini"></Profile_Picture>
        <h4>{nameAuthorNews}</h4>
      </Link>
    );
  }
}
