import usePageIndex from "Hooks/usePageIndex";
import React, { useEffect, useState } from "react";
import getNewsComment from "../Fetch/getNewsComment";

import Comment from '../Components/Comment/Comment'
import newNewsComments from "../Fetch/newNewsComments";
import deletComment from "../Fetch/deletComment";
import {notifyError, notifySuccess} from "../../../Components/Notifications/Notifications";

function useGetNewsComment(newsId: string, componentRef: React.RefObject<HTMLDivElement>) {
    const { pageIndex, setIsEnd} = usePageIndex(componentRef)
    const [commentArr, setCommentArr] = useState<JSX.Element[]>([]);

    const deleteCommentFromFeed = async (commentId: string) => {
        deletComment(commentId).then(() => {
            notifySuccess("Коментарий удалён");
            setCommentArr((prevState) => {
                return prevState.filter((comment) => comment.key !== commentId);
            })
        })
            .catch(() => {
                notifyError("Ошибка, коментарий не удален");
            });
    }


    useEffect(() => {
        getNewsComment(pageIndex, newsId).then((newsComments) => {
            const _commentArr = newsComments.map((comment) =>
                <Comment key={comment.id} comment={comment} deleteComment={deleteCommentFromFeed} />
            );
            if (commentArr.length < 10){
                setIsEnd(true);
            }
            setCommentArr([...commentArr, ..._commentArr]);
        });
    }, [pageIndex]);

    const addComment = async (text: string) => {
        return await newNewsComments(newsId, text).then((_comment) => {
            setCommentArr([
                <Comment key={_comment.id} comment={_comment} deleteComment={deleteCommentFromFeed}/>,
                ...commentArr
            ]);
            return Promise.resolve();
        }).catch((error) => Promise.reject(error))

    }

    return { commentArr, addComment };
}
export default useGetNewsComment;