import React, { Component } from "react";

export default function Content ({content, title}) {
  render() {
    content = typeof(content) === 'string' ? content : '';
    title = typeof(title) === 'string' ? title : '';

    let arrStr = content.split("\n");

    let arrP = [];
    arrStr.forEach((element, index) => {
      if (element.length === 0) arrP.push(<br key={index} />);
      else arrP.push(<p key={index}>{element}</p>);
    });

    return (
      <div className="content">
        <h5>{title}</h5>
        <div>{arrP}</div>
      </div>
    );
  }
}
