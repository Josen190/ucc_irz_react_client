import getUserFromId from "Fetch/getUserfromId";
import {useEffect, useState} from "react";
import User from "Helpers/User";
import getImage from "Fetch/getImage";

function useGetUser(id: string | null) {
    const [user, setUser] = useState<User>()

    useEffect(() => {
        if (!id) return;


        getUserFromId(id).then((user) => {
            setUser(user);
            getImage(user.image.id).then((image) => {
                const _user = user;
                _user.image = image;
                setUser(_user);
            })
        })


    }, [id])

    return user;
}

export default useGetUser;