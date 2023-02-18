import React, { Component } from "react";

import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";
import FeedNews from "../Components/News/FeedNews";
import User from "./User";

export default class News extends Component {
  render() {
    return (
        <FeedNews />
    );
  }
}
