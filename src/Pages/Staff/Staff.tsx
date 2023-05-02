import Employee from 'Helpers/Employee'
import { TablesUser, UserCard } from 'Modules/AdimnsrateUser'
import React, { useState } from 'react'

function Staff() {
  return (
    <div>
        <UserCard></UserCard>
        <TablesUser></TablesUser>
    </div>
  )
}

export default Staff