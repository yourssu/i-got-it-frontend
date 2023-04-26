import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import BoxButton from '../../components/Button/BoxButton'
import Letter from '../../images/Letter'
import './CreateLetter.scss'
import BackHeader from '../../components/Header/BackHeader'
import EmailDialog from '../../components/Dialog/EmailDialog/EmailDialog'

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

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  return (
    <>
      <BackHeader onClick={onCickBack} />
      <form
        className="create-letter-form"
        onSubmit={handleSubmit}
      >
        <div className="letter-title">결심한 나에게 편지쓰기</div>
        <div className="letter-description">내가 쓴 편지는 오직 미래의 나만 볼 수 있어요.</div>
        <div className="letter-wrapper">
          <Letter />
          <textarea
            className="letter-input"
            placeholder={`나에게 전하는 한마디를
            입력하세요.`}
            required
            maxLength={133}
            value={message}
            onChange={handleChange}
            cols={17}
            rows={10}
          />
        </div>
        <EmailDialog
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
