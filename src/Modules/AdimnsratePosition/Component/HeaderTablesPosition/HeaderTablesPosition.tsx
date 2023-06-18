import Button from 'UI/Button/Button';
import React, {useEffect, useState} from 'react'
import "./HeaderTablesPosition.scss"
import InputText from 'UI/Input/InputText';

interface Props {
    newPosition: (name: string) => void;
}

function HeaderTablesPosition({newPosition}: Props) {
    const [name, setName] = useState<string>();
    const [error, setError]= useState<string>();

    useEffect(() => {
        if (name && !error) setError(undefined);
    }, [name])

    return (
        <div className='header-table-position'>
            <InputText 
                onSetValue={setName} 
                placeholder="Название должности"
                error={error}
                />
            <Button type="button" onClick={() => {
                    if (name) newPosition(name); 
                    else setError("название должности неможет быть пустым ")
                }}>
                Добавить должность
            </Button>
        </div>
    )
}

export default HeaderTablesPosition