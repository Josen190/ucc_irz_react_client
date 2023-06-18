import { InputHTMLAttributes } from "react"
import styled from "styled-components"

export const LableContainer = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 0.875rem;
    font-weight: 500;
    color: #212529;
    word-break: break-word;
    cursor: default;
    -webkit-tap-highlight-color: transparent;
    line-height: 1.55;

`

export const Span = styled.span<{withAsterisk: boolean}>`
    display: ${props => props.withAsterisk ? "block": "none"};
    color: #fa5252;
`

export const Label = styled.div`
    display: flex;
    flex-direction: row;
`

export const Description = styled.p`
    text-decoration: none;
    word-break: break-word;
    color: #868e96;
    font-size: calc(0.875rem - 0.125rem);
    line-height: 1.2;
    margin: 0;
    
`

export const Error = styled.p`
    
`

export const Input = styled.input<InputHTMLAttributes<HTMLInputElement>>`
    appearance: none;
    resize: none;
    box-sizing: border-box;
    font-size: 0.875rem;
    width: 100%;
    color: #000;
    display: block;
    text-align: left;
    border: 0.0625rem solid #ced4da;
    background-color: #fff;
    transition: border-color 100ms ease;
    min-height: 2.25rem;
    padding-left: calc(2.25rem / 3);
    padding-right: calc(2.25rem / 3);
    border-radius: 0.25rem;
    margin-top: 5px;

    &:focus, :focus-within{
        outline: none;
        border-color: blue;
    }
`
