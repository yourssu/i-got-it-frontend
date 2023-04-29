import { useEffect, useState } from 'react'
import MenuHeader from '../../components/Header/MenuHeader'
import ToastDemo from '../../components/Toast/ToastDemo'
import MenuContent from '../MenuContent/MenuContent'
import './Mypage.scss'
import CheerRelay from '../Cheer/CheerRelay'
import { userIdState } from '../../State/userIdState'
import BoxButton from '../../components/Button/BoxButton/BoxButton'
import CheerDialog from '../../components/Dialog/CheerDialog/CheerDialog'
import { useGetResolution } from '../../hooks/useGetResolution'
import { useRecoilState } from 'recoil'
import { resolutionIdState } from '../../State/resolutionState'
import { useNavigate, useParams } from 'react-router-dom'
import LetterDialog from '../../components/Dialog/LetterDialog/LetterDialog'

const ToastMessages = {
  ENVELOPE_MINE: `뱉은 말은 결심할 때 설정한\n기한 후에 확인 가능해요.`,
  ENVELOPE_NOT_MINE: `쉿, 제 마음은 열 수 있어도\n이 편지는 열 수 없어요...☆`,
  SUCCESS_SHARE: `링크가 복사되었습니다.\n어서 친구들에게 공유하세요!`,
  ERROR_SHARE: `클립보드 복사가 지원되지 않습니다.\n상단 url을 복사해주세요!`,
}

const domain = `i-got-it.soomsil.de`

const MyPage = () => {
  const [openToast, setOpenToast] = useState(false)
  const [title, setTitle] = useState('')
  const [openMenu, setOpenMenu] = useState(false)
  const [openLetter, setOpenLetter] = useState(false)
  const [currentUserId] = useRecoilState(userIdState)
  const [resolutionId, setResolutionId] = useRecoilState(resolutionIdState)
  const paramsId = useParams()
  const { data: resolution } = useGetResolution(
    resolutionId == -1 ? Number(paramsId.resolutionId) : resolutionId
  )
  const navigate = useNavigate()

  const onClickMenu = () => {
    setOpenMenu((openMenu) => !openMenu)
  }

  const showToast = ($title: string) => {
    setOpenToast(true)
    setTitle($title)
  }

  const onShowLetter = () => {
    setOpenLetter((open) => !open)
  }

  const onCloseLetter = () => {
    setOpenLetter((open) => !open)
  }

  const onClickEnvelope = () => {
    if (resolution?.data.userId !== currentUserId) {
      showToast(ToastMessages.ENVELOPE_NOT_MINE)
    } else if (resolution?.data.status === 'INPROGRESS') {
      showToast(ToastMessages.ENVELOPE_MINE)
    } else {
      onShowLetter()
    }
  }

  const onClickResolution = () => {
    navigate('/login')
  }

  const shareURL = `${domain}/resolutions/${resolutionId}`
  const onClickShareLink = async () => {
    try {
      await navigator.clipboard.writeText(shareURL)
      showToast(ToastMessages.SUCCESS_SHARE)
    } catch (e) {
      showToast(ToastMessages.ERROR_SHARE)
    }
  }

  return (
    <>
      <ToastDemo
        title={title}
        open={openToast}
        setOpen={setOpenToast}
      />
      <BoxButton
        text={currentUserId == -1 ? '나도 결심 외치기' : '링크 공유하러 가기'}
        type="button"
        onClick={currentUserId == -1 ? onClickResolution : onClickShareLink}
      />
      <MenuContent
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <MenuHeader onClick={onClickMenu} />
      <div className="resolution-wrapper">
        <div className="yellow-star">
          <div className="nickname-resolution">{resolution?.data.nickname}의 “외침”</div>
          <div className="resolution-line" />
          <div
            className="resolution-line"
            id="resolution-line2"
          />
          <div className="resolution">{resolution?.data.content}</div>
          {resolution?.data.status === 'INPROGRESS' ? (
            <button
              type="button"
              className="envelop"
              onClick={onClickEnvelope}
            />
          ) : (
            <button
              type="button"
              className="non-lock-envelop"
              onClick={onClickEnvelope}
            />
          )}
          <LetterDialog
            showDialog={openLetter}
            description={resolution?.data.content}
            onClose={onCloseLetter}
          />
        </div>
        <div className="d-day-wrapper">
          {resolution?.data.status === 'INPROGRESS' ? (
            <span className="d-day d-day-title">뱉은 말 회수까지</span>
          ) : (
            <span className="d-day d-day-title">뱉은 말도 다시 보자 !</span>
          )}
          {resolution?.data.status === 'INPROGRESS' ? (
            <span className="d-day d-day-value"> D-{resolution?.data.dday}h</span>
          ) : null}
        </div>
        <div className="letter-line" />
      </div>
      <CheerRelay isHost={resolution!.data.userId == currentUserId} />
      <CheerDialog />
    </>
  )
}

export default MyPage
