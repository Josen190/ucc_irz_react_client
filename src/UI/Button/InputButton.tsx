import React from "react";
import styled from "styled-components";

interface Props extends React.HTMLProps<HTMLInputElement>{
    type: "button" | "submit";
    children?: string | JSX.Element | JSX.Element[];
}

const InputButton = ({type, children, ...rest}: Props) => (
        <label>
            {children}
            <input type={type} {...rest} />
        </label>)

const StyledInputButton = styled(InputButton)`
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
  
  & > input {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`

export default StyledInputButton;