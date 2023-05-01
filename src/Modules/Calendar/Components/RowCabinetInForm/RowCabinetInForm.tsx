import Cabinet from 'Helpers/Cabinet'
import Button from 'UI/Button/Button';
import React from 'react'

interface Props{
    cabinet: Cabinet;
    setCabinet: React.Dispatch<React.SetStateAction<Cabinet | null>>;
    coolbac?: () => void;
}

function RowCabinetInForm({cabinet, setCabinet, coolbac}: Props) {
    const curent = () => {
        setCabinet(cabinet);
        if (coolbac) coolbac();
    }

  return (
    <div className='row'>
        <p>{cabinet.name}</p>
        <Button type='button' onClick={curent}>Выбрать</Button>
    </div>
  )
}

export default RowCabinetInForm