import getUsers from "Fetch/getUsers";
import { useEffect, useState } from "react";
import PushUser from "../Components/PushUser/PushUser";
import User from "Helpers/User";
import usePageIndex from "Hooks/usePageIndex";
import useSelectedUsers from "./useSelectedUsers";
import useEndOfPage from "Hooks/useEndOfPage";
interface IFilter {
    PositionId?: string;
    Role?: string;
    IsActive?: boolean;
    SearchString?: string;
}


function useGetUsers() {
    const [filter, setFilter] = useState<IFilter>({
        PositionId: undefined,
        Role: undefined,
        IsActive: undefined,
        SearchString: undefined,
    });
    const { pageIndex, nextPage, restart } = usePageIndex()
    useEndOfPage(nextPage)
    const { users, selectedUsers, addUsers, clearUsers } = useSelectedUsers();

    useEffect(() => {
        getUsers({ ...filter, PageIndex: pageIndex }).then(addUsers);
    }, [pageIndex, filter]);

    return {users, selectedUsers}
}

export default useGetUsers;