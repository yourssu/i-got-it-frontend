import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { resolutionState } from '@/State/resolutionState'
import BoxButton from '@/components/Button/BoxButton/BoxButton'
import EmailDialog from '@/components/Dialog/EmailDialog/EmailDialog'
import BackHeader from '@/components/Header/BackHeader'
import { usePostResolution } from '@/hooks/usePostResolution'
import Letter from '@/images/Letter'

import './CreateLetter.scss'

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

  const handleSubmit = () => {
    setShowDialog(true)
  }

  const handleConfirm = (email: string) => {
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
      <EmailDialog
        onConfirm={handleConfirm}
        onReject={handleReject}
        showDialog={showDialog}
      />
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
            placeholder={'미래의 나에게 전하고 싶은 메시지를 입력하세요.'}
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
          <span className="letter-text-count">{inputCount} / 133</span>
        </div>
      </form>
      <BoxButton
        type="button"
        text="작성 완료"
        isDisabled={!message}
        onClick={handleSubmit}
      />
    </>
  )
}

export default CreateLetter
