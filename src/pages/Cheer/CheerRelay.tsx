import React, { useState } from 'react'
import NameTag1 from '../../images/Cheer/name_tag_1.svg'
import NameTag2 from '../../images/Cheer/name_tag_2.svg'
import NameTag3 from '../../images/Cheer/name_tag_3.svg'
import UserNameTag from './UserNameTag'
import CommentBubble from './CommnetBubble'
import './CheerRelay.scss'
import { dummy } from './dummy'
import { useRecoilState } from 'recoil'
import { cheerCommentState } from '../../State/cheerCommentState'
import SelectedCheerDialog from '../../components/Dialog/SelectedCheerDialog/SelectedCheerDialog'
import BasicDialog from '../../components/Dialog/BasicDialog/BasicDialog'

const Cheer = () => {
  const imgPath = [NameTag1, NameTag2, NameTag3]
  const [commentState, setCommentState] = useRecoilState(cheerCommentState)
  const [showDialog, setShowDialog] = useState<boolean>(false)

  const handleConfirm = () => {
    // 삭제시키는 로직 들어갈 예정
    setCommentState(-1)
  }

  const handleReject = () => {
    setCommentState(-1)
  }

  return (
    <div className="cheer-container">
      <div className="cheer-title">~응원의 릴레이~</div>
      {dummy.map((data, index) => {
        if (index % 2 == 0) {
          return (
            <section
              className="cheer-wrapper"
              key={`${data.writer}-${data.comment}`}
            >
              <UserNameTag
                position="left"
                writer={data.writer}
                img={imgPath[index % 3]}
              />
              <CommentBubble
                position="left"
                writer={data.writer}
                comment={data.comment}
                commentId={index}
                setShowDialog={setShowDialog}
              />
            </section>
          )
        } else {
          return (
            <section
              className="cheer-wrapper"
              key={`${data.writer}-${data.comment}`}
            >
              <CommentBubble
                position="right"
                writer={data.writer}
                comment={data.comment}
                commentId={index}
                setShowDialog={setShowDialog}
              />
              <UserNameTag
                position="right"
                writer={data.writer}
                img={imgPath[index % 3]}
              />
            </section>
          )
        }
      })}
      <BasicDialog
        showDialog={commentState != -1}
        title="말풍선을 삭제하시겠어요?"
        description="한 번 삭제하면 다시 되돌릴 수 없어요!"
        confirm="삭제"
        reject="취소"
        onConfirm={handleConfirm}
        onReject={handleReject}
      />
      <SelectedCheerDialog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
      />
    </div>
  )
}

export default Cheer
