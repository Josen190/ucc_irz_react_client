import React, { Component } from "react";

export default class CommentsIcon extends Component {
  render() {
    let numberComments = this.props.commentCount;
    const disableBtnProps = {};
    const switchComments = () => {
      disableBtnProps.disabled = false;

      disableBtnProps.disabled = true;
    };

    let button = (
      <button
        {...disableBtnProps}
        className="icon row"
        onClick={switchComments}
      >
        <p>{numberComments}</p>
      </button>
    );

    return <div className="icon">{button}</div>;
  }
}
