import React, { Component } from 'react'
import Day from './Day'

//numberMonth - нумерация месецев начинается с 0 - январь ...
function showMonth(year, numberMonth){

  //получение дня недели для первого дня месеца 
  let firstDayOfMonth = new Date(year, numberMonth , 1).getDay();
  //0 - восрресенье в 6 - восткресенье 
  firstDayOfMonth = firstDayOfMonth == 0 ? 6 : firstDayOfMonth - 1;
  let firstDayOfCalendar = new Date(year, numberMonth, 1);
  firstDayOfCalendar.setDate(firstDayOfCalendar.getDate() - firstDayOfMonth);

  let indexDay = new Date(firstDayOfCalendar);
  let arrDayOfCalendar = [];
  for (let i = 0; i < 5*7; i++){
      arrDayOfCalendar.push(new Date(indexDay));
      indexDay.setDate(indexDay.getDate() + 1);
  }
  
  return arrDayOfCalendar;
}


export default class Month extends Component {
  render() {
    let arrDayOfCalendar = showMonth(this.props.year, this.props.numberMonth);



    return (
      <div className='month'>
        <table>
        <thead>
            <tr>
                <th>Понедельник</th>
                <th>Вторник</th>
                <th>Среда</th>
                <th>Четверг</th>
                <th>Пятьница</th>
                <th>Субота</th>
                <th>Воскресенье</th>
            </tr>
        </thead>
          <tbody className='month-row'>
            <tr className='month-column'>
              <td><Day day={arrDayOfCalendar[0]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[1]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[2]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[3]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[4]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[5]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[6]} month={this.props.numberMonth}/></td>
            </tr>
            <tr className='month-column'> 
              <td><Day day={arrDayOfCalendar[7]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[8]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[9]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[10]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[11]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[12]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[13]} month={this.props.numberMonth}/></td>
            </tr>
            <tr className='month-column'>
              <td><Day day={arrDayOfCalendar[14]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[15]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[16]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[17]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[18]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[19]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[20]} month={this.props.numberMonth}/></td>
            </tr>
            <tr className='month-column'>
              <td><Day day={arrDayOfCalendar[21]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[22]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[23]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[24]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[25]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[26]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[27]} month={this.props.numberMonth}/></td>
            </tr>
            <tr className='month-column'>
              <td><Day day={arrDayOfCalendar[28]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[29]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[30]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[31]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[32]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[33]} month={this.props.numberMonth}/></td>
              <td><Day day={arrDayOfCalendar[34]} month={this.props.numberMonth}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
