import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import "./HeaderFeedNews.scss";
import { InputText } from 'UI/Input';
import { Select, Option } from 'UI/Select';
import { Button } from 'UI/Button';

interface Props {
    isLogin: boolean;
    setFilter?: (v: {PublicOnly?: boolean,
                 LikedOnly?: boolean,
                 SearchString?: string}) => void;
}

function HeaderFeedNews({ isLogin, setFilter }: Props) {
    const [PublicOnly, setPublicOnly] = useState<boolean>();
    const [LikedOnly, setLikedOnly] = useState<boolean>();
    const [SearchString, setSearchString] = useState<string>();

    const navigate = useNavigate();


    useEffect(() => {
        if (setFilter) setFilter({ PublicOnly, LikedOnly, SearchString })
    }, [PublicOnly, LikedOnly, SearchString])

    return (
        <div className='header-feed-news'>
            <InputText 
                onSetValue={setSearchString} 
                placeholder='Искать' />
            <Select setValue={setPublicOnly}>
                <Option value={undefined}>Все</Option>
                <Option value={true}>Публичные</Option>
            </Select>
            <Select setValue={setLikedOnly}>
                <Option value={undefined}>Все</Option>
                <Option value={true}>Понравившиеся</Option>
            </Select>
            {isLogin && (
                <Button
                    type="button"
                    onClick={() => {navigate("./new_news")}} 
                >
                    Создать новость
                </Button>
            )}
        </div>
    )
}

export default HeaderFeedNews
