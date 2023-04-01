import React from "react";
import Header from "../../Components/Header/Header";
import FeedNews from "../../Components/News/FeedNews";

export default function Visitor() {
  return (
    <>
      <Header islogin={false} />
      <FeedNews />
    </>
  );
}
