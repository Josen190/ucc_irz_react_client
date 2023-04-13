import Position from 'Helpers/Positions';
import React from 'react'
import PositionCard from '../Position/Position';

interface Props {
    positions: Position[]
}


function PositionList({ positions }: Props) {
    return (
        <div className="row">
            {positions.map((position) => {
                return (<PositionCard position={position}></PositionCard>
                );
            })}
        </div>
    )
}

export default PositionList