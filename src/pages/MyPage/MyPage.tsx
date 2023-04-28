import { useState } from 'react'
import MenuHeader from '../../components/Header/MenuHeader'
import ToastDemo from '../../components/Toast/ToastDemo'
import MenuContent from '../MenuContent/MenuContent'
import './Mypage.scss'
import CheerRelay from '../Cheer/CheerRelay'
import { useRecoilState } from 'recoil'
import { userIdState } from '../../State/userIdState'
import BoxButton from '../../components/Button/BoxButton/BoxButton'

const ToastMessages = {
  ENVELOPE: `뱉은 말은 결심할 때 설정한\n기한 후에 확인 가능해요.`,
}

const MyPage = () => {
  const [openToast, setOpenToast] = useState(false)
  const [title, setTitle] = useState('')
  const [openMenu, setOpenMenu] = useState(false)
  const [userId] = useRecoilState(userIdState)

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
  }

  const onClickShareLink = () => {
    console.log('링크 공유하러 가기')
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
          <div className="nickname-resolution">청소기의 “외침”</div>
          <div className="resolution-line" />
          <div
            className="resolution-line"
            id="resolution-line2"
          />
          <div className="resolution">
            결심들어가는곳 결심들어가는곳 결심들어가는곳 결심들어가는곳💨💨💨
          </div>
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
        <div className="d-day">뱉은 말 회수까지</div>
        <div className="letter-line" />
      </div>
      <CheerRelay />
    </>
  )
}

export default MyPage
