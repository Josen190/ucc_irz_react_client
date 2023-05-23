import {Form} from "react-router-dom";
import InputField from "UI/InputField/InputField";
import React, {useRef, useState} from "react";
import useAdministrateCabinet from "../../Hooks/useAdmistrateCabinet";
import Button from "UI/Button/Button";


function FormAllCabinet() {
    const [name, setName] = useState<string>();
    const ref = useRef<HTMLFormElement>(null)
    const {JSXCabinets: cabinetCards, newCabinet} = useAdministrateCabinet(ref)



    return (
        <div>
            <Form ref={ref} onSubmit={() => newCabinet(name ?? '')}>
                <div>
                    <InputField type="text" onSetValue={setName}/>
                    <Button type="submit">Добавить кабинет</Button>
                </div>
                <table>
                    <tbody>
                    {cabinetCards}
                    </tbody>
                </table>
            </Form>
        </div>
    )
}

export default FormAllCabinet;