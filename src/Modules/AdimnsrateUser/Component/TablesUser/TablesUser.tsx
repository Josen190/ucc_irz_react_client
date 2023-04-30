import useGetUsers from '../../Hooks/useGetUsers'
import React, { useState } from 'react'
import HeaderTablesUser from '../HeaderTablesUser/HeaderTablesUser';
import FormNewUser from '../FormNewUser/FormNewUser';




function TablesUser() {
    const [rowUser, setRowUser] = useState<JSX.Element[] | null>(null)
    const [active, setActive] = useState(false);

    useGetUsers(rowUser ?? [], setRowUser);

    return (
        <div>
            <HeaderTablesUser setActive={setActive} />
            <table className='tile'>
                <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Почта</th>
                        <th>Роль</th>
                    </tr>
                </thead>
                <tbody>
                    {rowUser}
                </tbody>
            </table>
            {active && <FormNewUser setActive={setActive} />}
        </div>

    )
}

export default TablesUser