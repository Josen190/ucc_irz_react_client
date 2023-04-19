import API from "Fetch/Api";
import Comment from "../Comment/Comment";
import CreateComment from "Modules/CreateCommentForm";
import { useState, useEffect } from "react";


interface Props {
  newsID: string;
}

export default function CommentFeed({ newsID }: Props) {
  const [commentArr, setCommentArr] = useState<JSX.Element[]>([]);

  useEffect(() => {
    
    API.getNewsComment(newsID).then((newsComments) => {
      let _commentArr: JSX.Element[] = [];
      newsComments.forEach((comment) => {
        _commentArr.push(<Comment key={comment.id} comment={comment} />);
      });
      setCommentArr(_commentArr);
    });
  }, [newsID]);

  return (
    <div className="column">
      <CreateComment newsID={newsID} />
      {commentArr}
    </div>
  );
}