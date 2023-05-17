import React, {useEffect, useState} from "react";
import getUserPosition from "Fetch/getUserPosition";
import RowUserPosition from "../Components/RowUserPosition/RowUserPosition";

function useGetPosition(userId: string) {
    const [userPositionJSX, setUserPosition] = useState<JSX.Element[]>([]);


    useEffect(() => {
        getUserPosition(userId).then((pos) => {
            setUserPosition(pos.map(p =>
                (<RowUserPosition key={p.id} userPosition={p}/>)
        ))
        })
    }, [])



    return userPositionJSX;
}

export default useGetPosition;