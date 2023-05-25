import Button from 'UI/Button/Button';
import React, {useState} from 'react'
import "./HeaderTablesPosition.scss"
import InputField from "UI/InputField/InputField";

interface Props {
    newPosition: (name: string) => void;
}

function HeaderTablesPosition({newPosition}: Props) {
    const [name, setName] = useState('');


    return (
        <div className='header-table-position'>
            <InputField type="text" onSetValue={setName} placeholder="Название должности"/>
            <Button type="button" onClick={() => newPosition(name)}>
                Добавить должность
            </Button>
        </div>
    )
}

export default HeaderTablesPosition