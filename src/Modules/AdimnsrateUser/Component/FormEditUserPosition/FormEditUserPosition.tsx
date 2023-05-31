import React, {useRef, useState} from 'react';
import {useNavigate, useOutletContext} from "react-router-dom";
import User from "Helpers/User";
import useEditUserPosition from "../../Hooks/useEditUserPosition";
import InputField from "UI/InputField/InputField";
import {ModalForm} from "UI/Modal";

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
                <InputField type="text" onSetValue={setSearchString}></InputField>
                {positionJSX}
            </div>
        </ModalForm>
    );
}

export default FormEditUserPosition;