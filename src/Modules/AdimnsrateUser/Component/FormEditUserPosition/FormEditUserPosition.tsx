import React, {useRef, useState} from 'react';
import {useNavigate, useOutletContext} from "react-router-dom";
import User from "Helpers/User";
import useEditUserPosition from "../../Hooks/useEditUserPosition";
import {ModalForm} from "UI/Form";
import { InputText } from 'UI/Input';

function FormEditUserPosition() {
    const user = useOutletContext<User>()
    const navigation = useNavigate();
    const ref = useRef<HTMLFormElement>(null)
    const [SearchString, setSearchString] = useState<string>()
    const {positionJSX, userPositionJSX } = useEditUserPosition(ref, user, SearchString);

    return (
        <ModalForm title={"Сохранить"} confirm={() => {
            console.log("+") }} ref={ref}>
            <div>
                {userPositionJSX}
            </div>
            <div>
                <InputText onSetValue={setSearchString}/>
                {positionJSX}
            </div>
        </ModalForm>
    );
}

export default FormEditUserPosition;