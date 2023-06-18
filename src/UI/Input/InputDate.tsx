import React from 'react'
import Input, { PropsInput } from './Input'
import MyDate from 'Helpers/MyDate';

interface Props extends Omit<PropsInput, "type">  {
  onSetValue?: (value: MyDate | undefined) => any;
}

function InputDate(props: Props) {
  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onSetValue) props.onSetValue(event.target.value.length > 0 ? new MyDate(event.target.value) : undefined)
    if (props.onChange) props.onChange(event);
  }

  return (
    <Input 
      type="date" 
      onChange={_onChange}  
      {...props}
    />
  )
}

export default InputDate;