import React from "react";
import UserPosition from "Helpers/UserPositions";

interface Props {
    userPosition: UserPosition;
}


function RowPositionForm({ userPosition }: Props) {

    return (
        <div className="row-position-form">
            <p>{userPosition.position.name}</p>
            <span>{`c ${userPosition.start.DatetoStr("dd-months-yyyy")} ${userPosition.end ? `по ${userPosition.end.DatetoStr("dd-months-yyyy")}` : ""}`}</span>
        </div>
    );
}

export default RowPositionForm;
