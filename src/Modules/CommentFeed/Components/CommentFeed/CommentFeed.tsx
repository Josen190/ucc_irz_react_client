import API from "Fetch/Api";
import Comment from "../Comment/Comment";
import { useState, useEffect } from "react";
import CreateComment from "Modules/CreateCommentForm";

interface Props {
  newsID: string;
}

export default function CommentFeed({ newsID }: Props) {
  const [commentArr, setCommentArr] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const api = new API();
    api.getNewsComment().then((newsComments) => {
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
