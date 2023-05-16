import getUserFromId from "Fetch/getUserfromId";
import {useEffect, useState} from "react";
import User from "Helpers/User";

function useGetUser(id: string | null) {
    const [user, setUser] = useState<User>()

    useEffect(() => {
        if (!id) return;

        getUserFromId(id).then((user) => {
            setUser(user);
        })
    }, [id])

    return user;
}

export default useGetUser;