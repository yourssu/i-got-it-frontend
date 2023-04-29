import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { cheerCommentState } from '../../State/resolutionCheerState'
import SelectedCheerDialog from '../../components/Dialog/SelectedCheerDialog/SelectedCheerDialog'
import BasicDialog from '../../components/Dialog/BasicDialog/BasicDialog'
import { useGetLetters } from '../../hooks/useGetLetters'
import Cheer from './Cheer'
import './CheerRelay.scss'
import { userIdState } from '../../State/userIdState'
import NoCheer from './NoCheer'
import { resolutionIdState } from '../../State/resolutionState'
import { useDeleteLetters } from '../../hooks/useDeleteLetters'
import { useParams } from 'react-router-dom'

const CheerRelay = () => {
  const [commentState, setCommentState] = useRecoilState(cheerCommentState)
  const [userId] = useRecoilState(userIdState)
  const [resolutionId] = useRecoilState(resolutionIdState)
  const paramsId = useParams()
  const { data: letters, refetch: getLettersRefetch } = useGetLetters(
    Number(paramsId.resolutionId),
    userId
  )
  const { data: response, mutate: deleteLetters } = useDeleteLetters()
  const letter = letters?.letters.slice(1)

  useEffect(() => {
    getLettersRefetch()
  }, [response])

  const handleConfirm = () => {
    deleteLetters({ resolutionId: resolutionId, letterId: commentState })
    setCommentState(-1)
  }

  const handleReject = () => {
    setCommentState(-1)
  }

  return (
    <div className="cheer-container">
      <div className="cheer-title">~응원의 릴레이~</div>
      {letter && letter.length == 0 ? <NoCheer /> : null}
      {letter && letter.length > 0 ? <Cheer letters={letter} /> : null}
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
