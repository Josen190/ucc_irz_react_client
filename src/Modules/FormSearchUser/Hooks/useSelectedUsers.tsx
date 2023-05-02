import User from "Helpers/User";
import React, { useCallback, useState } from "react";
import PushUser from "../Components/PushUser/PushUser";

function useSelectedUsers() {
    const [users, setUsers] = useState<JSX.Element[]>([]);
    const [selectedUsers, setSelectedUsers] = useState<JSX.Element[]>([]);

    const addUsers = (newUsers: User[]) => {
        const userElements = newUsers.map((user) => (
            <PushUser key={user.id} user={user} select={selectUser} unselect={unselectUser} isSelect={true} />
        ));

        setUsers((prevUsers) => {
            const existingKeys = new Set(prevUsers.map((user) => user.key));
            const filteredElements = userElements.filter(
                (element) => !existingKeys.has(element.key)
            );
            return [...prevUsers, ...filteredElements];
        });
    };

    const selectUser = (id: string) => {
        setUsers((prevUsers) => {
            const userIndex = prevUsers.findIndex((user) => user.key === id);
            if (userIndex === -1) {
                return prevUsers;
            }
            const user = prevUsers.splice(userIndex, 1)[0].props.user as User;
            const selectedUser = <PushUser key={user.id} user={user} select={selectUser} unselect={unselectUser} isSelect={false} />;
            setSelectedUsers((prevSelected) => [...prevSelected, selectedUser]);
            return prevUsers;
        });
    };

    const unselectUser = (id: string) => {
        setSelectedUsers((prevSelected) => {
            const selectedUserIndex = prevSelected.findIndex(
                (user) => user.key === id
            );
            if (selectedUserIndex === -1) {
                return prevSelected;
            }
            const user = prevSelected.splice(selectedUserIndex, 1)[0].props.user as User;
            const unselectedUser = <PushUser key={user.id} user={user} select={selectUser} unselect={unselectUser} isSelect={true} />;
            setUsers((prevUsers) => {
                prevUsers.push(unselectedUser)
                return prevUsers;
            });
            return prevSelected;
        });
    };

    const clearUsers = () => {
        setUsers([]);
        setSelectedUsers([]);
    };

    return {
        users,
        selectedUsers,
        addUsers,
        clearUsers,
    };
}
export default useSelectedUsers;