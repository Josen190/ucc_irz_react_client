import React from 'react'
import Author from '../../News/AuthorNews'
import Button from '../../basic/Button'
function PushUser({user, pushFun }) {

  return (
    <div className='row'>
        <Author user={user}></Author>
        <Button type='button' onClick={() => pushFun(user)}>Добавить</Button>
    </div>
  )
}

export default PushUser