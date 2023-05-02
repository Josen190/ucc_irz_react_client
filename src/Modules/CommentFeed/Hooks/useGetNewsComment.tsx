import usePageIndex from "Hooks/usePageIndex";
import React, { useEffect, useState } from "react";
import getNewsComment from "../Fetch/getNewsComment";

import Comment from '../Components/Comment/Comment'
import useEndOfPage from "Hooks/useEndOfPage";
import NewsComments from "Helpers/NewsComments";

function useGetNewsComment(newsId: string, ref: React.RefObject<HTMLDivElement>) {
    const { pageIndex, nextPage } = usePageIndex()
    const [commentArr, setCommentArr] = useState<JSX.Element[]>([]);

    useEndOfPage(nextPage, ref);

    useEffect(() => {
        getNewsComment(pageIndex, newsId).then((newsComments) => {
            const _commentArr = newsComments.map((comment) =>
                <Comment key={comment.id} comment={comment} />
            );
            setCommentArr([...commentArr, ..._commentArr]);
        });
    }, [pageIndex]);

    const update = (comment: NewsComments) => {
        setCommentArr([<Comment key={comment.id} comment={comment} />, ...commentArr])
    }

    return { commentArr, update };
}
export default useGetNewsComment;