import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../components/Header/Header'
import BoxButton from '../../components/Button/BoxButton'
import Letter from '../../images/Letter'
import './CreateLetter.scss'
import Dialog1 from '../../components/Dialog/Dialog1'

const CreateLetter = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [showDialog, setShowDialog] = useState(false)

  const onCickBack = () => {
    navigate('/create')
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setShowDialog(true)
  }

  const handleConfirm = (email: string) => {
    console.log(email)
    // email 처리 로직
    navigate('/mypage')
  }

  const handleReject = () => {
    navigate('/mypage')
  }

  const onInput = (event: any) => {
    setMessage(event.target.value)
  }

  return (
    <>
      <Header onClick={onCickBack} />
      <form
        className="create-letter-form"
        onSubmit={handleSubmit}
      >
        <div className="letter-title">결심한 나에게 편지쓰기</div>
        <div className="letter-description">내가 쓴 편지는 오직 미래의 나만 볼 수 있어요.</div>
        <Letter />
        <input
          type="text"
          placeholder="나에게 전하는 한마디를 입력하세요."
          required
          maxLength={133}
          value={message}
          onInput={onInput}
        />
        <Dialog1
          onConfirm={handleConfirm}
          onReject={handleReject}
          showDialog={showDialog}
        />
        <BoxButton
          type="submit"
          text="작성 완료"
          isDisabled={!message}
        />
      </form>
    </>
  )
}

export default CreateLetter
