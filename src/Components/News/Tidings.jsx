import React, { Component } from "react";

import Author from "./AuthorNews";
import Content from "../basic/Content";
import Like from "./Like";
import CommentsIcon from "./CommentsIcon";
import CommentFeed from "./CommentFeed";

export default class Tidings extends Component {
  render() {
    return (
      <div>
        <div className="tile">
          <Author author={this.props.author}></Author>
          <Content title={this.props.title} content={this.props.text}></Content>
          <div className="row">
            <Like
              likesCount={this.props.likesCount}
              isLiked={this.props.isLiked}
            ></Like>
            <CommentsIcon commentCount={this.props.commentCount}></CommentsIcon>
          </div>
        </div>
        <CommentFeed></CommentFeed>
      </div>
    );
  }
}
