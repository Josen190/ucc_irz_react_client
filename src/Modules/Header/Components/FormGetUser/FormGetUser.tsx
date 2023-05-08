import React, {useRef} from "react";
import useGetUsers from "../../Hooks/useGetUsers";
import "./FormGetUser.scss"

interface Props{
    SearchString?: string;
}


export default function FormGetUser({SearchString}: Props){
    const ref = useRef<HTMLDivElement>(null)
    const {usersJsx, errorMessage} = useGetUsers(ref, {SearchString})

    return (
        <div ref={ref} className="form-get-users tile">
            {usersJsx}
            {usersJsx.length === 0 && <p>{errorMessage}</p>}
        </div>
    )
}
