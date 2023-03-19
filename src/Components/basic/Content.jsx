import React, { Component } from "react";

export default function Content ({content, title, image}) {
    content = typeof(content) === 'string' ? content : '';
    title = typeof(title) === 'string' ? title : '';

    let arrStr = content.split("\n");

    let arrP = [];
    arrStr.forEach((element, index) => {
      if (element.length === 0) arrP.push(<br key={index} />);
      else arrP.push(<p key={index}>{element}</p>);
    });
    arrP = arrP.length > 0 ? arrP: '';
    return (
      <div className="content">
        <h5>{title}</h5>
        <div>{arrP}</div>
        {image}
      </div>
    );
  }

