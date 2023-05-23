import React from "react";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import useGetUserPosition from "../../Hooks/useGetUserPositions";

function userPositionAll() {
    const {userId} = useParams();
    const navigate = useNavigate()
    if (!userId) {
        navigate("../");
        return <></>;
    }

    const userPositionJSX = useGetUserPosition(userId)


    return (
        <div className='modal z-index-20' onClick={() => navigate("../")}>
            <div className='tile' onClick={(e) => e.stopPropagation()}>
                <div>
                    {userPositionJSX}
                </div>
            </div>
        </div>
    )
}

export default userPositionAll;