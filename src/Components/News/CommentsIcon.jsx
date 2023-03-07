import React, { Component } from "react";
import ChatBoxOutline from '../icons/ChatBoxOutline'
export default class CommentsIcon extends Component {
  render() {
    let numberComments = this.props.commentCount;
    const disableBtnProps = {};
    const switchComments = () => {
      disableBtnProps.disabled = false;
      this.props.setActive(true);
      disableBtnProps.disabled = true;
    };
    
    let button = (
      <button
        {...disableBtnProps}
        className="icon row"
        onClick={switchComments}
      >
        <span>{numberComments}</span>
        <ChatBoxOutline></ChatBoxOutline>
      </button>
    );

    return <div className="icon">{button}</div>;
  }
}
