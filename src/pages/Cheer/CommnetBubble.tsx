import React from 'react'
import Bubble from '../../images/Cheer/comment_bubble.svg'
import Locker from '../../images/Cheer/locker.svg'

type CommentBubbleType = {
  position : string
  comment: string
}

const CommentBubble = ({position, comment} : CommentBubbleType)=> {
  return (
    <div className="bubble-wrapper">
      <img className="bubble-locker" src={Locker} alt={Locker} />
      <span className="bubble-comment">{comment.length > 8 ? comment.substring(0, 8) + "..." : comment}</span>
      <img className={`bubble-img-${position}`} src={Bubble} alt='speech-bubble' />
    </div>
  )
}

export default CommentBubble