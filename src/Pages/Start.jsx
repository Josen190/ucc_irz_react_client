import React, { Component } from "react";
import Header from "../Components/Header/Header";
import FeedNews from "../Components/News/FeedNews";


export default class Start extends Component {
  render() {
    return (
      <>
        <Header isauth={false}/>
        <FeedNews />
      </>
    );
  }
}
