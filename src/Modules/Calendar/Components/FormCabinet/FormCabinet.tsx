import MyDate from 'Helpers/MyDate';
import useGetCabinet from '../../Hooks/useGetCabinet';
import React, { SetStateAction, useEffect } from 'react'
import Cabinet from 'Helpers/Cabinet';

interface Props {
    setActive: React.Dispatch<SetStateAction<boolean>>
    setCabinet: React.Dispatch<SetStateAction<Cabinet | null>>
    start: MyDate,
    end: MyDate,
}

function FormCabinet({ setActive, setCabinet, start, end }: Props) {
    const { JSXCabinets, curentCabinet } = useGetCabinet(true, start, end, undefined);
    
    useEffect(() => {
        console.log(curentCabinet);
        setCabinet(curentCabinet)
    }, [curentCabinet])


    return (
        <div className="modal" onClick={() => setActive(false)}>
            <div className="column tile" onClick={(e) => { e.stopPropagation(); }}>
                {JSXCabinets}
            </div>
        </div>
    )
}

export default FormCabinet