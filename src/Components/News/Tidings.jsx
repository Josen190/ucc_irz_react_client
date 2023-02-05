import React, { Component } from "react";

import AuthorNews from "./AuthorNews";
import Content from "./Content";
import Like from "./Like";
import CommentsIcon from "./CommentsIcon";

export default class Tidings extends Component {
  render() {
    return (
      <div className="tile">
        <AuthorNews></AuthorNews>
        <Content></Content>
        <div className="row">
          <Like></Like>
          <CommentsIcon></CommentsIcon>
        </div>
      </div>
    );
  }
}
