import useGetPositions from '../../Hooks/useGetPositions'
import React from 'react'
import HeaderTablesPosition from '../HeaderTablesPosition/HeaderTablesPosition';
import "./TablesPosition.scss"


function TablesPosition() {
    const {positionsJSX, newPosition} = useGetPositions();

    return (
        <div className="table-position-container">
            <HeaderTablesPosition newPosition={newPosition}/>
            <table className='table-position tile'>
                <tbody>
                    {positionsJSX}
                </tbody>
            </table>
        </div>

    )
}

export default TablesPosition