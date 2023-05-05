import getUserFromId from "Fetch/getUserfromId";
import { useAppDispatch } from "Hooks";
import { useEffect } from "react";
import { setUser } from "../Reducers/UserAdministrationReduser";

function useGetUser(id: string | null) {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!id) return;

        getUserFromId(id).then((user) => {
            dispatch(setUser({ user: user.getParams() }))
        })
    }, [id])

}

export default useGetUser;