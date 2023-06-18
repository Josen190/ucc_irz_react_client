import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components';
import * as C from './Input.C'

export interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    withAsterisk?: boolean;
    description?: string;
    error?: string;
}



function Input({label, description, error, withAsterisk = false, ...rest}: PropsInput) {
    const _withAsterisk = rest.required ? true : withAsterisk;
      
  return (
    <C.LableContainer>
        <C.Label>
            {label}
            <C.Span withAsterisk={_withAsterisk}>&nbsp;*</C.Span>
        </C.Label>
        {!!description && description.length > 0 && <C.Description >{description}</C.Description>}
        <C.Input {...rest}/>
        {!!error && error.length > 0 && <C.Error>{error}</C.Error>}
    </C.LableContainer>
  )
}




export default Input;