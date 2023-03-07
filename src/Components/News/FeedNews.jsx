import React, { Component, useState } from "react";
import API, { catchApi, url_getNews } from "../../api/Api";
import Tidings from "./Tidings";

export default class FeedNews extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      arrNews: [],
    };
  }

  async componentDidMount() {
    let userID = this.props.userID === undefined ? null : this.props.userID;
    let publicOnly =
      this.props.publicOnly === undefined ? null : this.props.publicOnly;
    let likedOnly =
      this.props.likedOnly === undefined ? null : this.props.likedOnly;

    let params = {};
    if (userID != null) {
      params.AuthorId = userID;
    }

    if (publicOnly != null) {
      params.PublicOnly = publicOnly;
    }

    if (likedOnly != null) {
      params.LikedOnly = likedOnly;
    }

    const response = await API.get(url_getNews, { params: params }).catch(error =>  console.log(error));

    if (response.data == null) return null;
    let arrNews = [];
    response.data.forEach((tiding, index) => {
      arrNews.push(
        <Tidings
          key={index}
          id={tiding.id}
          title={tiding.title}
          text={tiding.text}
          likesCount={tiding.likesCount}
          commentCount={tiding.commentCount}
          author={tiding.author}
          isLiked={tiding.isLiked}
        />
      );
    });

    this.setState({arrNews: arrNews});
  }

  render() {
    return <main className="column">{this.state.arrNews}</main>;
  }
}
