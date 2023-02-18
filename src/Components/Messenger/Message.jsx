import React, { Component } from "react";
import Content from "../basic/Content";
import Profile_Picture from "../Profile/Profile_Picture";
import { Link } from "react-router-dom";

export default class Message extends Component {
  render() {
    let name = "слава";
    let time = "11:34";
    return (
      <div className="message">
        <Profile_Picture type='mini'/>
        <div className="column">
          <div className="row">
            <Link to="/account">{name}</Link>
            <span>{time}</span>
          </div>
          <Content />
        </div>
      </div>
    );
  }
}
