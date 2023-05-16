import useGetUsers from '../../Hooks/useGetUsers'
import React from 'react'
import HeaderTablesUser from '../HeaderTablesUser/HeaderTablesUser';
import "./TablesUser.scss"


function TablesUser() {


    const rowUser = useGetUsers();

    return (
        <div className="table-users-container">
            <HeaderTablesUser />
            <table className='table-users tile'>
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