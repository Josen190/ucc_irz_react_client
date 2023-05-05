import Button from 'UI/Button/Button';
import React, { SetStateAction } from 'react'

import "./PopUpMessage.scss"

interface Props<T extends boolean | JSX.Element | null> {
    title?: string;
    children: string;
    setActive: React.Dispatch<SetStateAction<T>>
}

function PopUpMessage<T extends boolean | (JSX.Element | null)>({ children: message, title, setActive }: Props<T>) {

    const close = () => {
        setActive(null as T);
    }

    return (
        <div className='modal popup'>
            <div className='message-window tile'>
                <div className='message'>
                    {title && <div className='title'>
                        <p>{title}</p>
                    </div>}
                    <div className='text'>
                        <p>{message}</p>
                    </div>
                </div>
                <div className='close'>
                    <Button type='button'>Хорошо</Button>
                </div>
            </div>
        </div>
    )
}

export default PopUpMessage