import {useEffect, useState} from "react";
import getUsers from "../Fetch/getUsers";
import React from "react";
import usePageIndex from "Hooks/usePageIndex";
import RowTableUser from "../Component/RowTableUser/RowTableUser";


function useGetUsers(
   searchString?: string, isActive?: boolean, role?: string, positionId?: string) {

    const [rowUser, setRowUser] = useState<JSX.Element[]>([])
    const {PageIndex, setIsEnd} = usePageIndex();



    useEffect(() => {
        getUsers(PageIndex, searchString, isActive, role, positionId).then((users) => {
            const _rowUser: JSX.Element[] = [...rowUser];
            if (users.length < 10){
                setIsEnd(true);
            }

            (users.forEach(user => {
                _rowUser.push(<RowTableUser key={user.id} user={user} />);
            }))
            setRowUser(_rowUser)
        })
    }, [PageIndex])

    return rowUser;
}
export default useGetUsers;