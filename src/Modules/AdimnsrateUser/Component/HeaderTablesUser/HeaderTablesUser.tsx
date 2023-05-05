
import Button from 'UI/Button/Button';
import React from 'react'

interface Props {
    setActive?: React.Dispatch<React.SetStateAction<boolean>>;
}


function HeaderTablesUser({ setActive }: Props) {
    return (
        <div className='header-feed-news'>
            <Button type="button" onClick={() => { if(setActive) setActive(true) }}>
                Добавить сотрудника
            </Button>
        </div>
    )
}

export default HeaderTablesUser