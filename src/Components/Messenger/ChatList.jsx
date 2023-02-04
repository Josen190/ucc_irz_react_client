import React, { Component } from 'react'
import Button from '../Button'

export default class ChatList extends Component {
  render() {
    return (
      <div className='column'>
        <Button type='link' value='чат 1' />    
        <Button type='link' value='чат 1' />    
        <Button type='link' value='чат 1' />    
        <Button type='link' value='чат 1' />    
        <Button type='link' value='чат 1' />    
      </div>
    )
  }
}
