
import Comment from "../Comment/Comment";
import CreateComment from "../CreateComment/CreateComment";
import React, { useState, useEffect, useRef } from "react";
import NewsComments from "Helpers/NewsComments";
import useGetNewsComment from "../../Hooks/useGetNewsComment";



interface Props {
  newsID: string;
}

export default function CommentFeed({ newsID }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const {commentArr, update} = useGetNewsComment(newsID, ref)

  return (
    <div ref={ref} className="column">
      <CreateComment newsID={newsID} update={update}/>
      {commentArr}
    </div>
  );
}