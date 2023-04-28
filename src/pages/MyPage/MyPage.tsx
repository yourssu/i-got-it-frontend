import { useState } from 'react'
import MenuHeader from '../../components/Header/MenuHeader'
import ToastDemo from '../../components/Toast/ToastDemo'
import MenuContent from '../MenuContent/MenuContent'
import './Mypage.scss'
import CheerRelay from '../Cheer/CheerRelay'
import { userIdState } from '../../State/loginState'
import BoxButton from '../../components/Button/BoxButton/BoxButton'
import CheerDialog from '../../components/Dialog/CheerDialog/CheerDialog'
import { useGetResolution } from '../../hooks/useGetResolution'
import { useRecoilState } from 'recoil'
import { resolutionIdState } from '../../State/resolutionState'
import { useNavigate } from 'react-router-dom'

const ToastMessages = {
  ENVELOPE: `뱉은 말은 결심할 때 설정한\n기한 후에 확인 가능해요.`,
}

const shareURL = 'share test'

const MyPage = () => {
  const [openToast, setOpenToast] = useState(false)
  const [title, setTitle] = useState('')
  const [openMenu, setOpenMenu] = useState(false)
  const [userId] = useRecoilState(userIdState)
  const [idState, setIdState] = useRecoilState(resolutionIdState)
  const { data: resolution } = useGetResolution(idState)
  const navigate = useNavigate()

  const onClickMenu = () => {
    setOpenMenu((openMenu) => !openMenu)
  }

  const showToast = ($title: string) => {
    setOpenToast(true)
    setTitle($title)
  }

  const onClickEnvelope = () => {
    showToast(ToastMessages.ENVELOPE)
  }

  const onClickResolution = () => {
    console.log('나도 결심 외치기')
    navigate('/login')
  }

  const onClickShareLink = async () => {
    try {
      await navigator.clipboard.writeText(shareURL)
      showToast('링크 복사 완료')
    } catch (e) {
      showToast('링크 복사 실패')
    }
  }

  return (
    <>
      <BoxButton
        text={userId == -1 ? '나도 결심 외치기' : '링크 공유하러 가기'}
        type="button"
        onClick={userId == -1 ? onClickResolution : onClickShareLink}
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
          <button
            type="button"
            className="envelop"
            onClick={onClickEnvelope}
          />
          <ToastDemo
            title={title}
            open={openToast}
            setOpen={setOpenToast}
          />
        </div>
        <div className="d-day-wrapper">
          <span className="d-day d-day-title">뱉은 말 회수까지</span>
          <span className="d-day d-day-value"> D-{resolution?.data.dday}h</span>
        </div>
        <div className="letter-line" />
      </div>
      <CheerRelay />
      <CheerDialog />
    </>
  )
}

export default MyPage
