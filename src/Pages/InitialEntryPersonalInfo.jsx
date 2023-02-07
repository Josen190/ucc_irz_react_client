import React, { Component } from "react";
import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";

export default class InitialEntryPersonalInfo extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div className="mg-10-auto grid-col-2 ">
          <Menu></Menu>
          <main>InitialEntryPersonalInfo</main>
        </div>
      </>
    );
  }
}
