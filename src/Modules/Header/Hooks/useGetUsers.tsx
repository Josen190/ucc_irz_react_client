import {useEffect, useRef, useState} from "react";
import React from "react";
import usePageIndex from "Hooks/usePageIndex";
import getUsers from "Fetch/getUsers";
import UserVisitingCard from "../../../Components/UserVisitingCard/UserVisitingCard";

interface IFilter {
    PositionId?: string;
    Role?: string;
    IsActive?: boolean;
    SearchString?: string;
}



function useGetUsers(
    componentRef: React.RefObject<HTMLDivElement>,
    {SearchString}: IFilter) {

    const {pageIndex: PageIndex, restart, setIsEnd} = usePageIndex(componentRef);

    const [usersJsx, setUsersJsx] = useState<JSX.Element[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("Поиск...");

    const refSearchString = useRef<string>();
    const refPageIndex = useRef<number>();

    useEffect(() => {
        let _usersJsx = usersJsx;
        const isNewFilter = !!refSearchString.current && refSearchString.current !== SearchString;
        if (isNewFilter) {
            _usersJsx = [];
            restart();
            setIsEnd(false);
            setErrorMessage("Поиск...");
        }

        refSearchString.current = SearchString;
        refPageIndex.current = PageIndex;

        if (refPageIndex.current && refPageIndex.current === PageIndex && !isNewFilter){
            return;
        }

        getUsers({PageIndex, SearchString}).then((users) => {
            if (users.length < 10){
                setIsEnd(true);
            }

            const _rowUser: JSX.Element[] = [..._usersJsx];
            users.forEach(user => {
                _rowUser.push(<UserVisitingCard key={user.id} user={user} />);
            })
            setUsersJsx(_rowUser)

            if (_rowUser.length === 0){
                setErrorMessage("Нет такого сотрудника");
            }

        })
    }, [PageIndex, SearchString])

    return {usersJsx, errorMessage};
}
export default useGetUsers;