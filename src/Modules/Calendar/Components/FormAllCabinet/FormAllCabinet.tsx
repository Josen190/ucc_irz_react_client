import {Form} from "react-router-dom";
import InputField from "UI/InputField/InputField";
import React, {useRef, useState} from "react";
import useAdministrateCabinet from "../../Hooks/useAdmistrateCabinet";
import Button from "UI/Button/Button";
import {ModalForm} from "UI/Modal";


function FormAllCabinet() {
    const [name, setName] = useState<string>();
    const ref = useRef<HTMLFormElement>(null)
    const {JSXCabinets: cabinetCards, newCabinet} = useAdministrateCabinet(ref)



    return (
        <ModalForm ref={ref} title={"Добавить кабинет"} confirm={() => newCabinet(name ?? '')}>
                <div>
                    <InputField type="text" onSetValue={setName}/>
                </div>
                <table>
                    <tbody>
                    {cabinetCards}
                    </tbody>
                </table>
        </ModalForm>
    )
}

export default FormAllCabinet;