import React, { Component } from 'react'
import Tidings from '../Components/News/Tidings'

export default class News extends Component {
  render() {
    let arrNews = [<Tidings/>, <Tidings/>, <Tidings/>]  

    return (
      <main className='column'>
        {arrNews}
      </main>
    )
  }
}
