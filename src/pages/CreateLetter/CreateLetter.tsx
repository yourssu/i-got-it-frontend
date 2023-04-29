import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import BoxButton from '../../components/Button/BoxButton/BoxButton'
import Letter from '../../images/Letter'
import './CreateLetter.scss'
import BackHeader from '../../components/Header/BackHeader'
import EmailDialog from '../../components/Dialog/EmailDialog/EmailDialog'
import { useRecoilValue } from 'recoil'
import { resolutionState } from '../../State/resolutionState'
import { usePostResolution } from '../../hooks/usePostResolution'

const CreateLetter = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [showDialog, setShowDialog] = useState(false)
  const [inputCount, setInputCounte] = useState(0)
  const resolutionValue = useRecoilValue(resolutionState)
  const { mutate: postResolution } = usePostResolution()

  const onCickBack = () => {
    navigate('/create')
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setShowDialog(true)
  }

  const handleConfirm = (email: string) => {
    console.log(email)

    postResolution({ period: 3, content: resolutionValue, letter: message, mail: email })
  }

  const handleReject = () => {
    postResolution({ period: 3, content: resolutionValue, letter: message })
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
    setInputCounte(event.target.value.length)
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
            onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength)
            }}
          />
        </div>
        <span className="letter-text-count">{inputCount} / 133</span>
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
