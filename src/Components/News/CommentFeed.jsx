import React from 'react'
import { useState } from 'react'

function CommentFeed() {
    const [commentArr, setCommentArr] = useState([])


  return (
    <div>
        {commentArr}
    </div>
  )
}

export default CommentFeed