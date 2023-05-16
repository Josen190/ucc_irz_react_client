import Button from 'UI/Button/Button';
import React from 'react'
import {useNavigate} from "react-router-dom";
import "./HeaderTablesUser.scss"

function HeaderTablesUser() {
    const navigate = useNavigate()

    return (
        <div className='header-table-users'>
            <Button type="button" onClick={() => { navigate("/admin/staff/new_staff") }}>
                Добавить сотрудника
            </Button>
        </div>
    )
}

export default HeaderTablesUser