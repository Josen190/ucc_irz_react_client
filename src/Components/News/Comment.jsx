import React, { useContext } from 'react'
import Button from '../basic/Button'
import Content from '../basic/Content'
import Author from './AuthorNews'
import { authContext } from "../api/authentication/authController";

export default function Comment ({data}) {
    const {authData} = useContext(authContext)
    let isMyComment = authData.myID === data.user.id ? authData.myID !== null : false;

    return (
      <div className='tile'>
        <div className='row'>
          <Author author={data.user}/>
          {isMyComment && <Button >Удалить</Button>}
        </div>
        <Content content={data.text}></Content>
      </div>
    )
  }

