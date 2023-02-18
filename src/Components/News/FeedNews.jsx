import React, { Component } from 'react'
import Tidings from "./Tidings";
export default class FeedNews extends Component {
  render() {

    let arrNews = [<Tidings key={1}/>, <Tidings key={2}/>, <Tidings key={3}/>];
    return (
        <main className="column">{arrNews}</main>
    )
  }
}
