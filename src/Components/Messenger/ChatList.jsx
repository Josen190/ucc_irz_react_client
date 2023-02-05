import React, { Component } from 'react'
import Button from '../basic/Button'
import './messenger.css';

export default class ChatList extends Component {
  render() {
    return (
      <div className='chat-list column'>
        <Button type='link' value='чат 1' color='mini' />    
        <Button type='link' value='чат 1' color='mini' />    
        <Button type='link' value='чат 1' color='mini' />   
        <Button type='link' value='чат 1' color='mini' />   
        <Button type='link' value='чат 1' color='mini' />   
      </div>
    )
  }
}
