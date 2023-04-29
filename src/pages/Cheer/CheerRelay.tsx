import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { addCheerState, cheerCommentState } from '../../State/resolutionCheerState'
import SelectedCheerDialog from '../../components/Dialog/SelectedCheerDialog/SelectedCheerDialog'
import BasicDialog from '../../components/Dialog/BasicDialog/BasicDialog'
import { useGetLetters } from '../../hooks/useGetLetters'
import Cheer from './Cheer'
import './CheerRelay.scss'
import { userIdState } from '../../State/userIdState'
import NoCheer from './NoCheer'
import { resolutionIdState } from '../../State/resolutionState'

const CheerRelay = ({ isHost }: { isHost: boolean }) => {
  const [commentState, setCommentState] = useRecoilState(cheerCommentState)
  const [userId] = useRecoilState(userIdState)
  const [resolutionId] = useRecoilState(resolutionIdState)
  const [addCheer] = useRecoilState(addCheerState)
  const { data: letters, refetch: getLettersRefetch } = useGetLetters(resolutionId, userId)
  const letter = letters?.letters.slice(1)

  useEffect(() => {
    getLettersRefetch()
  }, [addCheer])

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
      {letter && letter.length == 0 ? <NoCheer isHost={isHost} /> : null}
      {letter && letter.length > 0 ? (
        <Cheer
          isHost={isHost}
          letters={letter}
        />
      ) : null}
      <BasicDialog
        showDialog={commentState != -1}
        title="말풍선을 삭제하시겠어요?"
        description="한 번 삭제하면 다시 되돌릴 수 없어요!"
        confirm="삭제"
        reject="취소"
        onConfirm={handleConfirm}
        onReject={handleReject}
      />
      <SelectedCheerDialog />
    </div>
  )
}

export default CheerRelay
