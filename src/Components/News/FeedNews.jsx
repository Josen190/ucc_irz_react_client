import React, { Component } from 'react'
import Tidings from "./Tidings";
export default class FeedNews extends Component {
  render() {

    let arrNews = [<Tidings />, <Tidings />, <Tidings />];
    return (
        <main className="column">{arrNews}</main>
    )
  }
}
