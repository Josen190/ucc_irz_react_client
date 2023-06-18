import React, {RefObject} from "react";
import ModalBG from "./ModalBG";
import {useNavigate} from "react-router-dom";
import {Button} from "UI/Button";
import * as C from "./Form.C";




interface Props extends React.HTMLProps<HTMLFormElement>{
    children: JSX.Element | JSX.Element[];
    title: string;
    confirm: () => void;
    close?: () => void;
    ref?: RefObject<HTMLFormElement>
}

export default function ModalForm({children, title, confirm, close, ref}: Props) {
    const navigate = useNavigate()

    const _close = () => {
        if (close) close();
        navigate("../");
    }

    return (
        <ModalBG onClick={_close}>
            <C.FormStale onSubmit={confirm} ref={ref}>
                <C.FormContent>
                    {children}
                </C.FormContent>
                <C.FormControl>
                    <Button type={"button"} view={"red-reverse"} onClick={_close}>Отмена</Button>
                    <Button type={"submit"} view={"basic"}>{title}</Button>
                </C.FormControl>
            </C.FormStale>
        </ModalBG>
    )

}