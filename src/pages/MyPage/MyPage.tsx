import MenuHeader from '../../components/Header/MenuHeader'
import ToastDemo from '../../components/Toast/ToastDemo'
import './Mypage.scss'
import { useState } from 'react'

const ToastMessages = {
  ENVELOPE: `뱉은 말은 결심할 때 설정한\n기한 후에 확인 가능해요.`,
}

const MyPage = () => {
  const [openToast, setOpenToast] = useState(false)
  const [title, setTitle] = useState('')

  const onClickMenu = () => {}

  const showToast = ($title: string) => {
    setOpenToast(true)
    setTitle($title)
  }

  const onClickEnvelope = () => {
    showToast(ToastMessages.ENVELOPE)
  }

  return (
    <>
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
    </>
  )
}

export default MyPage
