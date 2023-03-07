import React, { Component } from "react";

export default class Content extends Component {
  render() {
    let content = typeof(this.props.content) === 'string' ? this.props.content : '';
    let arrStr = content.split("\n");
    let title = typeof(this.props.title) === 'string' ? this.props.title : '';
    
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
