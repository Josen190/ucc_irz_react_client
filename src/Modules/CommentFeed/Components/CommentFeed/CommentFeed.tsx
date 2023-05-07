import CreateComment from "../CreateComment/CreateComment";
import React, { useRef } from "react";
import useGetNewsComment from "../../Hooks/useGetNewsComment";
import "./CommentFeed.scss"


interface Props {
  newsID: string;
}

export default function CommentFeed({ newsID }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const {commentArr, addComment} = useGetNewsComment(newsID, ref)

  return (
    <div ref={ref} className="comment-feed">
      <CreateComment addComment={addComment}/>
      {commentArr}
    </div>
  );
}