import { useAppSelector } from 'Hooks';
import Button from 'UI/Button/Button';
import React from 'react'

interface Props {
    setActive?: React.Dispatch<React.SetStateAction<boolean>>;
    setFilter?: Function
}


function HeaderTablesUser({ setActive, setFilter }: Props) {
    return (
        <div className='header-feed-news'>
            <Button type="button" onClick={() => { if(setActive) setActive(true) }}>
                Добавить сотрудника
            </Button>
        </div>
    )
}

export default HeaderTablesUser