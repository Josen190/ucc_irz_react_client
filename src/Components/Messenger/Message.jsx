import React, { Component } from "react";
import Content from "../basic/Content";
import Profile_Picture from "../Profile/Profile_Picture";

export default class Message extends Component {
  render() {
    let name = "слава";
    let time = "11:34";
    return (
      <div className="message">
        <Profile_Picture type='mini'/>
        <div className="column">
          <div className="row">
            <a href="/account">{name}</a>
            <span>{time}</span>
          </div>
          <Content />
        </div>
      </div>
    );
  }
}
