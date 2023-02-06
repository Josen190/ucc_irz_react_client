import React, { Component } from 'react'
import Button from '../basic/Button'
import Textarea from '../basic/Textarea'
import SvgPaperPlaneOutline from '../icons/PaperPlaneOutline'

export default class InputMessage
 extends Component {
  render() {
    return (
      <div className='row glue-bottom'>
        <Textarea rows='1' isresize='true' />
        <Button type='submit' value={<SvgPaperPlaneOutline />} color='mini' />
      </div>
    )
  }
}
