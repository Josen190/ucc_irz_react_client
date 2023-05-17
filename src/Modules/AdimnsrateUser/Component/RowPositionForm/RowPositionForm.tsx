
import React from "react";
import Position from "Helpers/Positions";
import Button from "UI/Button/Button";
import "./RowPositionForm.scss"

interface Props {
    position: Position;
    select: (selectPositionId: string) => void;
    title: string;
}


function RowPositionForm({ position, select, title }: Props) {

    return (
        <div className="row-position-form">
            <p>{position.name}</p>
            <Button type="button" onClick={() => select(position.id)}>{title}</Button>
        </div>
    );
}

export default RowPositionForm;
