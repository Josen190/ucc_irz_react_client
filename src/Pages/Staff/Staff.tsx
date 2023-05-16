import { TablesUser } from 'Modules/AdimnsrateUser'
import React from 'react'
import {Outlet, useMatches} from "react-router-dom";
import "./Staff.scss"

function Staff() {
    const matches = useMatches()
    const isPerv = matches.length === 2 || matches[2].id === "1-0-2";

  return (
    <div className="staff-page">
        <div className="container-staff-card tile">
            <Outlet />
            {isPerv &&
                <h2>Сотрудник не выбран</h2>
            }
        </div>
        <TablesUser></TablesUser>
    </div>
  )
}

export default Staff