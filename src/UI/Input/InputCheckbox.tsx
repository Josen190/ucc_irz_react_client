import React from 'react'
import Input, { PropsInput } from './Input'
import MyDate from 'Helpers/MyDate';

interface Props extends Omit<PropsInput, "type">  {
  onSetValue?: (value: boolean) => any;
}

function InputCheckbox(props: Props) {
  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onSetValue) props.onSetValue(event.target.checked)
    if (props.onChange) props.onChange(event);
  }

  return (
    <Input 
      type="checkbox" 
      onChange={_onChange}  
      {...props}
    />
  )
}

export default InputCheckbox;