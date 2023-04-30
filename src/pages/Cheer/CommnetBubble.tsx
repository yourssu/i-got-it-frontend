import React from 'react'

import { useRecoilState } from 'recoil'
import { useLongPress } from 'use-long-press'

import { lettersLockedState } from '@/State/lettersLockedState'
import { cheerCommentState, showDialogState } from '@/State/resolutionCheerState'
import { selectedCheerState } from '@/State/resolutionCheerState'
import Bubble from '@/images/Cheer/comment_bubble.svg'
import Locker from '@/images/Cheer/locker.svg'

type CommentBubbleType = {
  position: string
  writer: string
  comment: string
  commentId: number
  isHost: boolean
}

const CommentBubble = ({ position, writer, comment, commentId, isHost }: CommentBubbleType) => {
  const [, setCommentState] = useRecoilState(cheerCommentState)
  const [, setSelectedCheerState] = useRecoilState(selectedCheerState)
  const [lettersLocked] = useRecoilState(lettersLockedState)
  const [, setShowDialog] = useRecoilState(showDialogState)

  const handleLongPress = useLongPress(() => {
    if (isHost) setCommentState(commentId)
  })

  const handleClick = () => {
    if (!lettersLocked) {
      setShowDialog(true)
      setSelectedCheerState({ writer, comment })
    }
  }

  return (
    <div
      className={`bubble-wrapper ${isHost || !lettersLocked ? 'cursor' : null}`}
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
