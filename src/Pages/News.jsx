import React, { Component } from "react";

import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";
import FeedNews from "../Components/News/FeedNews";

export default class News extends Component {
  render() {
    

    return (
      <>
        <Header></Header>
        <div className="mg-10-auto grid-col-2 ">
          <Menu></Menu>

          <FeedNews />
        </div>
      </>
    );
  }
}
