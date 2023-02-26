import React, { Component } from "react";

import AuthorNews from "./AuthorNews";
import Content from "../basic/Content";
import Like from "./Like";
import CommentsIcon from "./CommentsIcon";

export default class Tidings extends Component {
  render() {
    return (
      <div className="tile">
        <AuthorNews author={this.props.author}></AuthorNews>
        <Content title={this.props.title} content={this.props.text}></Content>
        <div className="row">
          <Like likesCount={this.props.likesCount} isLiked={this.props.isLiked}></Like>
          <CommentsIcon commentCount={this.props.commentCount}></CommentsIcon>
        </div>
      </div>
    );
  }
}
