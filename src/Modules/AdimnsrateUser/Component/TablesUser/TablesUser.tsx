import useGetUsers from '../../Hooks/useGetUsers'
import React, { useState } from 'react'
import HeaderTablesUser from '../HeaderTablesUser/HeaderTablesUser';




function TablesUser() {
    const [rowUser, setRowUser] = useState<JSX.Element[] | null>(null)

    useGetUsers(setRowUser);

    return (
        <div>
            <HeaderTablesUser />
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
        </div>

    )
}

export default TablesUser