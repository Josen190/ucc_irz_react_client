import { useEffect, useState } from "react";
import getUsers from "../Fetch/getUsers";
import React from "react";
import usePageIndex from "Hooks/usePageIndex";
import useEndOfPage from "Hooks/useEndOfPage";
import RowTableUser from "../Component/RowTableUser/RowTableUser";


async function useGetUsers(
    setRowUser: React.Dispatch<React.SetStateAction<JSX.Element[] | null>>,
    searchString?: string, isActive?: boolean, role?: string, positionId?: string) {

    const [pageIndex, nextPage] = usePageIndex();
    useEndOfPage(nextPage);

    useEffect(() => {
        getUsers(pageIndex, searchString, isActive, role, positionId).then((users) => {
            setRowUser(users.map(user => {
                return (<RowTableUser key={user.id} user={user} />)
            }))
        })
    }, [pageIndex])
}
export default useGetUsers;