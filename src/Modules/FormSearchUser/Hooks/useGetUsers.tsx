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
    const { PageIndex, } = usePageIndex()
    const { users, selectedUsers, addUsers } = useSelectedUsers();

    useEffect(() => {
        getUsers({ ...filter, PageIndex: PageIndex }).then(addUsers);
    }, [PageIndex, filter]);

    return {users, selectedUsers}
}

export default useGetUsers;