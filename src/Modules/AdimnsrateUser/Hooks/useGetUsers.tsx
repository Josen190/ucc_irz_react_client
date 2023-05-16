import {useEffect, useState} from "react";
import getUsers from "../Fetch/getUsers";
import React from "react";
import usePageIndex from "Hooks/usePageIndex";
import RowTableUser from "../Component/RowTableUser/RowTableUser";


function useGetUsers(
   searchString?: string, isActive?: boolean, role?: string, positionId?: string) {

    const [rowUser, setRowUser] = useState<JSX.Element[]>([])
    const {pageIndex, setIsEnd} = usePageIndex();



    useEffect(() => {
        getUsers(pageIndex, searchString, isActive, role, positionId).then((users) => {
            const _rowUser: JSX.Element[] = [...rowUser];
            if (users.length < 10){
                setIsEnd(true);
            }

            (users.forEach(user => {
                _rowUser.push(<RowTableUser key={user.id} user={user} />);
            }))
            setRowUser(_rowUser)
        })
    }, [pageIndex])

    return rowUser;
}
export default useGetUsers;