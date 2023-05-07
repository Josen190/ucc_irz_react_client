import React, { useEffect, useRef, useState } from "react";
import fetchGetNews from "../Fetch/fetchGetNews";
import { INewsFiler } from "../Reducers/NewsFilterReduser";
import usePageIndex from "Hooks/usePageIndex";
import News from "Helpers/News";
import Tidings from "../Components/Tidings/Tidings";
import Image from "Helpers/Image";
import createNews from "../Fetch/createNews";
import {useAppSelector} from "../../../Hooks";
import User from "Helpers/User";
import deleteTidings from "../Fetch/deleteTidings";
import {notifyError, notifySuccess} from "../../../Components/Notifications/Notifications";


function useGetNews(
    filter?: INewsFiler,
) {

    const { pageIndex, restart, setIsEnd } = usePageIndex();
    const [arrNews, setArrNews] = useState<JSX.Element[]>([]);
    const prevFilterRef = useRef<INewsFiler>();


    // useDeleteNewsFromFeed(deleteKeyElement, arrNews, setArrNews);

    const deleteNews = (newsId: string) => {
        deleteTidings(newsId).then(() => {
            notifySuccess("Новость удалена");
            setArrNews((prev) => {
                return prev.filter(el => {
                    return el.key !== newsId;
                })
            })

        }).catch(() => {
            notifyError("Ошибка, новотсь не удалена")

        });
    }


    useEffect(() => {
        let prevNews = arrNews;
        if (!prevFilterRef.current || prevFilterRef.current !== filter) {
            setIsEnd(false);
            restart();
            prevNews = [];
        }

        fetchGetNews(pageIndex, filter).then(tidings => {
            if (tidings.length < 10) {
                setIsEnd(true);
            }
            const _arrNews: JSX.Element[] = [];
            _arrNews.push(...prevNews);
            tidings.forEach((tiding) => {
                _arrNews.push(
                    <Tidings
                        key={tiding.id}
                        tidings={tiding}
                        deletElement={deleteNews}
                    />
                );
            });
            setArrNews(_arrNews);
        })

        prevFilterRef.current = filter;
    }, [pageIndex, filter]);


    const update = (news: News) => {
        setArrNews([<Tidings key={news.id} tidings = { news } deletElement = { deleteNews } />, ...arrNews]);
    };

    const user = useAppSelector(s => {
        const paramUser = s.authorization.user;
        return paramUser ? new User(paramUser) : null;
    })

    const newNews = async (title: string, content: string, isGlobal: boolean, image?: Image) => {
        if (!user)
            return Promise.reject();

        return await createNews(user, title, content, isGlobal, image).then((news) => {
            update(news);
            return Promise.resolve();
        }).catch((error) => Promise.reject(error.response.data))
    }

    return {arrNews, newNews}
}

export default useGetNews;