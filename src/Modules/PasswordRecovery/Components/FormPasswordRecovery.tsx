import React, {useState} from "react";
import {Form} from "react-router-dom";
import postResetPasswordUrl from "../Fetch/postResetPasswordUrl";
import { InputText } from "UI/Input";
import { Button } from "UI/Button";

function FormPasswordRecovery() {
    const [email, setEmail] = useState<string>();

    const resetPassword = () => {
        if (!email || email.length === 0)
            return;
        postResetPasswordUrl(email).then((data) => {
            console.log(data);
        })



    }

    return (
        <div>
            <Form onSubmit={resetPassword}>
                <InputText onSetValue={setEmail} placeholder="Электронная почта" />
                <Button type="submit">Отпарвить</Button>
            </Form>
        </div>
    )
}

export default FormPasswordRecovery;