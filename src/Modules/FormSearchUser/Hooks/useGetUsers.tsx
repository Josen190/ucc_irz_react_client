import getUsers from "Fetch/getUsers";
import { useEffect, useState } from "react";
import usePageIndex from "Hooks/usePageIndex";
import useSelectedUsers from "./useSelectedUsers";

interface IFilter {
    PositionId?: string;
    Role?: string;
    IsActive?: boolean;
    SearchString?: string;
}


function useGetUsers(SearchString: string | undefined) {
    const [filter] = useState<IFilter>({
        PositionId: undefined,
        Role: undefined,
        IsActive: undefined,
        SearchString: SearchString,
    });
    const { pageIndex, } = usePageIndex()
    const { users, selectedUsers, addUsers } = useSelectedUsers();

    useEffect(() => {
        getUsers({ ...filter, PageIndex: pageIndex }).then(addUsers);
    }, [pageIndex, filter]);

    return {users, selectedUsers}
}

export default useGetUsers;