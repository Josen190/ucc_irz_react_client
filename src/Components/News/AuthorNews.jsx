import React, { Component } from "react";
import Profile_Picture from "../Profile/Profile_Picture";
import { Link } from "react-router-dom";

export default class Author extends Component {
  render() {
    let firstName = this.props.author.firstName;
    let surname = this.props.author.surname;
    let patronymic =
      this.props.author.patronymic == null ? "" : this.props.author.patronymic;
    let authorID = this.props.author.id;

    let nameAuthorNews = `${firstName} ${surname} ${patronymic}`;
    return (
      <Link to={`/account/${authorID}`} className="row">
        <Profile_Picture type="mini"></Profile_Picture>
        <h4>{nameAuthorNews}</h4>
      </Link>
    );
  }
}
