import Button from '../../Button/Button';
import React from 'react'

import "./PopUpMessage.scss"
import {useAppSelector} from "../../../Hooks";
import useSelected from "../Hooks/useSelected";


function PopUpMessage() {
    const {message, isActive} = useAppSelector(s => s.popUp);

    if (!isActive) return <></>;


    return (
        <div className='modal popup'>
            <div className='message-window tile'>
                <div className='message'>
                    {/*{title && <div className='title'>*/}
                    {/*    <p>{title}</p>*/}
                    {/*</div>}*/}
                    <div className='text'>
                        <p>{message}</p>
                    </div>
                </div>
                <div className='close'>
                    <Button type='button' view={"red-reverse"} onClick={() => useSelected(false)}>Отмена</Button>
                    <Button type='button' onClick={() => useSelected(true)}>Хорошо</Button>
                </div>
            </div>
        </div>
    )
}

export default PopUpMessage