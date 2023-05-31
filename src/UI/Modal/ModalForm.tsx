import React, {RefObject} from "react";
import styled from "styled-components";
import ModalBG from "./ModalBG";
import {Form, useNavigate} from "react-router-dom";
import {baseTheme} from "../../Styles/Theme.stales";
import {Button} from "UI/Button";

const FormStale = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 50px;
  width: auto;
  max-width: ${baseTheme.sizes.modal.max_width};
  min-width: ${baseTheme.sizes.modal.min_width};
  height: auto;
  min-height: ${baseTheme.sizes.modal.min_height};
  max-height: ${baseTheme.sizes.modal.max_height};
  overflow: auto;
`

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`

const FormControl = styled.div`
  display: flex;
  flex-direction: row;
`


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
            <FormStale onSubmit={confirm} ref={ref}>
                <FormContent>
                    {children}
                </FormContent>
                <FormControl>
                    <Button type={"button"} view={"red-reverse"} onClick={_close}>Отмена</Button>
                    <Button type={"submit"} view={"basic"}>{title}</Button>
                </FormControl>
            </FormStale>
        </ModalBG>
    )

}