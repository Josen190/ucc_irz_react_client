import MyForm from "./MyForm";
import * as C from "./Form.C";
import React, { useState } from "react";

interface Props extends React.HTMLProps<HTMLFormElement>{
    children: JSX.Element | JSX.Element[];
    title: string;
    bind: React.ReactNode;
    confirm: () => void;
    close?: () => void;
}

function DropDownForm({children, title, bind, confirm, close}: Props) {
    const [active, setActive] = useState(false);

    return (
        <C.DropDownContainer>
            <div onClick={() => {setActive(!active)}}>
                {bind}
            </div>
            <C.DropDown>
                <MyForm title={title}>
                    {children}
                </MyForm>
            </C.DropDown>
        </C.DropDownContainer>
    )
}

export default DropDownForm;