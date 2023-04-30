import Button from 'UI/Button/Button';
import InputField from 'UI/InputField/InputField';
import Option from 'UI/Select/Option';
import Select from 'UI/Select/Select';
import React, { useEffect, useState } from 'react'

interface Props {
    isLogin: boolean;
    setActive?: React.Dispatch<React.SetStateAction<boolean>>;
    setFilter?: (v: any) => void;
}

// выбор пользователя
// публичнная?
// лайки
// поиск 

// const filter = {AuthorId: userId, PublicOnly: undefined, LikedOnly: undefined, SearchString: undefined};

function HeaderFeedNews({ isLogin, setActive, setFilter }: Props) {
    const [PublicOnly, setPublicOnly] = useState<boolean>();
    const [LikedOnly, setLikedOnly] = useState<boolean>();
    const [SearchString, setSearchString] = useState<string>();
    

    useEffect(() => {
        if (setFilter) setFilter({ PublicOnly, LikedOnly, SearchString })
    }, [PublicOnly, LikedOnly, SearchString])

    return (
        <div className='header-feed-news'>
            <Select setValue={setPublicOnly}>
                <Option value={undefined}>Все</Option>
                <Option value={true}>Публичные</Option>
                <Option value={false}>Пользовательские</Option>
            </Select>
            <Select setValue={setLikedOnly}>
                <Option value={undefined}>Все</Option>
                <Option value={true}>Понравившиеся</Option>
            </Select>
            <InputField type='text' onSetValue={(v: string) => setSearchString(v.length == 0 ? undefined : v)} placeholder='Искать' />
            {isLogin && (
                <Button
                    type="button"
                    onClick={() => { if (setActive) setActive(true) }}
                >
                    Создать новость
                </Button>
            )}
        </div>
    )
}

export default HeaderFeedNews
