import React, { Component } from "react";

export default class Content extends Component {
  render() {
    let content = this.props.content;
    content = typeof(content) === 'string' ? content : '';
    let arrStr = content.split("\n");

    let arrP = [];
    arrStr.forEach((element, index) => {
      if (element.length === 0) arrP.push(<br key={index} />);
      else arrP.push(<p key={index}>{element}</p>);
    });

    return (
      <div className="content">
        <h5>{this.props.title}</h5>
        <div>{arrP}</div>
      </div>
    );
  }
}
