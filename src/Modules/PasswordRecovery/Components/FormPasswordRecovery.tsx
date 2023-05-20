import React, {useState} from "react";
import {Form} from "react-router-dom";
import InputField from "UI/InputField/InputField";
import Button from "UI/Button/Button";
import postResetPasswordUrl from "../Fetch/postResetPasswordUrl";

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
                <InputField type="email" onSetValue={setEmail} placeholder="Электронная почта"></InputField>
                <Button type="submit">Отпарвить</Button>
            </Form>
        </div>
    )
}

export default FormPasswordRecovery;