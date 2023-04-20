import { useAppSelector } from 'Hooks';
import Button from 'UI/Button/Button';
import React from 'react'

interface Props {
    isLogin: boolean;
    setActive?: React.Dispatch<React.SetStateAction<boolean>>;
}


function HeaderFeedNews({ isLogin, setActive }: Props) {
    return (
        <div className='header-feed-news'>
            {isLogin && (
                <Button
                    type="button"
                    onClick={() => { if(setActive) setActive(true) }}
                >
                    Создать новость
                </Button>
            )}
        </div>
    )
}

export default HeaderFeedNews