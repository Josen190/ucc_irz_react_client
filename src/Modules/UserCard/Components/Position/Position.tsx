import MyDate from 'Helpers/MyDate';
import Position from 'Helpers/Positions'
import React, { useEffect, useState } from 'react'

interface Props {
    position: Position;
}

function PositionCard({ position }: Props) {
    const [start, setSatrt] = useState<MyDate>();

    useEffect(() => {
        const date = position?.getDate();
        if (date && typeof date !== 'boolean')
            setSatrt(date.start);
    }, [])

    return (
        <div className="column">
            <p>{position.name}</p>
            <small>{start?.DatetoStr("yyyy-mm-dd")}</small>
        </div>
    )
}

export default PositionCard;