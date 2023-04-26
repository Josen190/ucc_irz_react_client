import { useEffect, useState } from "react";
import getUsers from "../Fetch/getUsers";
import React from "react";
import usePageIndex from "Hooks/usePageIndex";
import useEndOfPage from "Hooks/useEndOfPage";


async function useGetUsers(
    setRowUser: React.Dispatch<React.SetStateAction<JSX.Element[] | null>>,
    // pageIndex: number,
    searchString?: string, isActive?: boolean, role?: string, positionId?: string) {

    const [pageIndex, nextPage] = usePageIndex();
    useEndOfPage(nextPage);

    useEffect(() => {
        getUsers(pageIndex, searchString, isActive, role, positionId).then((users) => {
            setRowUser(users.map(user => {
                return (<tr key={user.id}>
                    <td>{user.getFullName()}</td>
                    <td>{user.email}</td>
                    <td>{user.roles.join(", ")}</td>
                </tr>)
            }))
        })
    }, [pageIndex])
}
export default useGetUsers;