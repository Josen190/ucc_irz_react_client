
import Position from 'Helpers/Positions'
import React from 'react'

interface Props {
    position: Position;
}

function PositionCard({ position }: Props) {
    return (
        <div className="column">
            <p>{position.name}</p>
        </div>
    )
}

export default PositionCard;