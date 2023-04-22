import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../components/Header/Header'
import BoxButton from '../../components/Button/BoxButton'
import Letter from '../../images/Letter'
import './CreateLetter.scss'

const CreateLetter = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const onCickBack = () => {
    navigate('/create')
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    navigate('')
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
