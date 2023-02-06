import React, { Component } from 'react'
import './calendar.css';

export default class Day extends Component {
  render() {
    let day = this.props.day;
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let className='day'

    if (today.getTime() === day.getTime()){
        className += ' today';
    }

    if (day.getMonth() != this.props.month){
        className += ' noThisMonth'
    }

    return (
      <div className={className}>
        {day.getDate()}
      </div>
    )
  }
}
