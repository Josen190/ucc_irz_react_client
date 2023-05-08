import { useEffect } from "react";
import getUsers from "../Fetch/getUsers";
import React from "react";
import usePageIndex from "Hooks/usePageIndex";
import RowTableUser from "../Component/RowTableUser/RowTableUser";


async function useGetUsers(
    rowUser: JSX.Element[],
    setRowUser: React.Dispatch<React.SetStateAction<JSX.Element[] | null>>,
    searchString?: string, isActive?: boolean, role?: string, positionId?: string) {

    const {pageIndex} = usePageIndex();

    useEffect(() => {
        getUsers(pageIndex, searchString, isActive, role, positionId).then((users) => {
            const _rowUser: JSX.Element[] = [...rowUser];
            (users.forEach(user => {
                _rowUser.push(<RowTableUser key={user.id} user={user} />);
            }))
            setRowUser(_rowUser)
        })
    }, [pageIndex])
}
export default useGetUsers;