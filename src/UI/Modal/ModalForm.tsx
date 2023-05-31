import React from "react";
import styled from "styled-components";
import ModalBG from "UI/Modal/ModalBG";
import {Form, useNavigate} from "react-router-dom";
import {baseTheme} from "../../Styles/Theme.stales";

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


interface Props{
    children: JSX.Element | JSX.Element[];
}

export default function ModalForm({children}: Props) {
    const navigate = useNavigate()

    return (
        <ModalBG
            onClick={() => {
                navigate("../");
            }}
        >
            <FormStale>
                <FormContent>
                    {children}
                </FormContent>
                <FormControl>

                </FormControl>
            </FormStale>
        </ModalBG>
    )

}