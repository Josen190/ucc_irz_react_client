import React, {FormHTMLAttributes, RefObject} from "react";
import * as C from "./Form.C";
import { Button } from "UI/Button";


interface Props extends FormHTMLAttributes<HTMLFormElement>{
    children: JSX.Element | JSX.Element[];
    title: string;
    confirm?: () => void;
    close?: () => void;
    ref?: RefObject<HTMLFormElement>
}



export default function MyForm({children, title, confirm, close, ref, ...rest}: Props) {
    return (
        <C.FormStale onSubmit={confirm} ref={ref}>
            <C.FormContent>
                {children}
            </C.FormContent>
            <C.FormControl>
                <Button type={"button"} view={"red-reverse"} onClick={close}>Отмена</Button>
                <Button type={"submit"} view={"basic"}>{title}</Button>
            </C.FormControl>
        </C.FormStale>
    )

}