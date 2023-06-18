import React from 'react'
import Input, { PropsInput } from './Input'

interface Props extends Omit<PropsInput, "type">  {
  onSetValue?: (value: string | undefined) => any;
}

function InputText(props: Props) {
  const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onSetValue) props.onSetValue(event.target.value.length > 0 ? event.target.value : undefined)
    if (props.onChange) props.onChange(event);
  }

  return (
    <Input 
      type="text" 
      onChange={_onChange}  
      {...props}
    />
  )
}

export default InputText