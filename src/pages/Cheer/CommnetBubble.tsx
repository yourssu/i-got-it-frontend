import React, { useState } from 'react'
import Bubble from '../../images/Cheer/comment_bubble.svg'
import Locker from '../../images/Cheer/locker.svg'
import { useLongPress } from 'use-long-press'
import { useRecoilState } from 'recoil'
import { cheerCommentState } from '../../State/cheerCommentState'
import { selectedCheerState } from '../../State/selectedCheerState'
type CommentBubbleType = {
  position: string
  writer: string
  comment: string
  commentId: number
  setShowDialog: (showDialog: boolean) => void
}

const CommentBubble = ({
  position,
  writer,
  comment,
  commentId,
  setShowDialog,
}: CommentBubbleType) => {
  const [long, setLong] = useState(false)
  const [, setCommentState] = useRecoilState(cheerCommentState)
  const [, setSelectedCheerState] = useRecoilState(selectedCheerState)

  const handleLongPress = useLongPress(() => {
    setLong(true)
    setCommentState(commentId)
  })

  const handleClick = () => {
    setShowDialog(true)
    setSelectedCheerState({ writer, comment })
  }

  return (
    <div
      className="bubble-wrapper"
      onClick={handleClick}
      {...handleLongPress()}
    >
      <img
        className="bubble-locker"
        src={Locker}
        alt={Locker}
      />
      <span className="bubble-comment">
        {comment.length > 8 ? comment.substring(0, 8) + '...' : comment}
      </span>
      <img
        className={`bubble-img-${position}`}
        src={Bubble}
        alt="speech-bubble"
      />
    </div>
  )
}

export default CommentBubble
