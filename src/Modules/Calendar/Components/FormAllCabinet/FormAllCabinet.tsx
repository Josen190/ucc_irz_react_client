import {Form} from "react-router-dom";
import React, {useRef, useState} from "react";
import useAdministrateCabinet from "../../Hooks/useAdmistrateCabinet";
import {ModalForm} from "UI/Form";
import { InputText } from "UI/Input";


function FormAllCabinet() {
    const [name, setName] = useState<string>();
    const ref = useRef<HTMLFormElement>(null)
    const {JSXCabinets: cabinetCards, newCabinet} = useAdministrateCabinet(ref)



    return (
        <ModalForm ref={ref} title={"Добавить кабинет"} confirm={() => newCabinet(name ?? '')}>
                <div>
                    <InputText onSetValue={setName}/>
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