import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

const LableContainer = styled.label`
    border-radius: 5px;
    padding: 5px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    font-family: "Helvetica", serif;
    font-weight: 300;
    font-size: 14px;
    text-align: center;
    cursor: pointer;

`

const Input = styled.input<InputHTMLAttributes<HTMLInputElement>>`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    type: "button" | "submit";
}

const InputButton = ({type, children, ...rest}: Props) => (
        <LableContainer>
            {children}
            <Input type={type} {...rest} />
        </LableContainer>)


export default InputButton;