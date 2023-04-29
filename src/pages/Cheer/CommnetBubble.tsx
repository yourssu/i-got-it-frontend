import React from 'react'
import Bubble from '../../images/Cheer/comment_bubble.svg'
import Locker from '../../images/Cheer/locker.svg'
import { useLongPress } from 'use-long-press'
import { useRecoilState } from 'recoil'
import { cheerCommentState, showDialogState } from '../../State/resolutionCheerState'
import { selectedCheerState } from '../../State/resolutionCheerState'
import { lettersLockedState } from '../../State/lettersLockedState'
import { userIdState } from '../../State/userIdState'
type CommentBubbleType = {
  position: string
  writer: string
  comment: string
  commentId: number
}

const CommentBubble = ({ position, writer, comment, commentId }: CommentBubbleType) => {
  const [, setCommentState] = useRecoilState(cheerCommentState)
  const [, setSelectedCheerState] = useRecoilState(selectedCheerState)
  const [lettersLocked] = useRecoilState(lettersLockedState)
  const [userId] = useRecoilState(userIdState)
  const [, setShowDialog] = useRecoilState(showDialogState)

  const handleLongPress = useLongPress(() => {
    if (userId != -1) setCommentState(commentId)
  })

  const handleClick = () => {
    if (!lettersLocked) {
      setShowDialog(true)
      setSelectedCheerState({ writer, comment })
    }
  }

  return (
    <div
      className={`bubble-wrapper ${userId != -1 || !lettersLocked ? 'cursor' : null}`}
      onClick={handleClick}
      {...handleLongPress()}
    >
      {lettersLocked ? (
        <img
          className="bubble-locker"
          src={Locker}
          alt={Locker}
        />
      ) : null}
      <span className={`bubble-comment ${lettersLocked ? 'locked' : null}`}>
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
