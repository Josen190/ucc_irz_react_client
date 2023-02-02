import React, { Component } from 'react'
import SvgHeart from '../icons/Heart';
import SvgHeartOutline from '../icons/HeartOutline';



export default class Like extends Component {
  constructor(props) {
    super();
    this.isLike = false;
    this.like_use;
    this.isButton = 'enable';
    this.size = "25px";
    this.switchLike = () => {
      this.isLike = !this.isLike;
      if (this.isLike) {
        this.like_use = <SvgHeart size={this.size}></SvgHeart>;
      }
      else {
        this.like_use = <SvgHeartOutline size={this.size}></SvgHeartOutline>;
      }
    }
  }

  render() {
    if (this.isLike) {
      this.like_use = <SvgHeart size={this.size}></SvgHeart>;
    }
    else {
      this.like_use = <SvgHeartOutline size={this.size}></SvgHeartOutline>;
    }

    return (
      <div>
        <button disabled={this.isButton} className='icon' onClick={this.switchLike}>
          {like_use}
        </button>
      </div>
    )
  }
}
