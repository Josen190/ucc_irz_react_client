import React from 'react'
import Button from '../../Button'

function ContextButton({children, onClick}) {
  return (
    <Button type="button" onClick={onClick}>{children}</Button>
  )
}

export default ContextButton