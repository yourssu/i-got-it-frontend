import React, { useState } from 'react'

import { useRecoilState } from 'recoil'

import { nicknameState } from '@/State/nicknameState'
import BoxButton from '@/components/Button/BoxButton/BoxButton'
import { usePostNickname } from '@/hooks/usePostNickname'
import './Nickname.scss'

const Nickname = () => {
  const [nickname, setNickname] = useState<string>('')
  const [, setNicknameState] = useRecoilState(nicknameState)
  const [checkNickname, setCheckNickname] = useState<boolean>(false)
  const { mutate: postNickname } = usePostNickname()

  const handleSubmit = () => {
    setNicknameState(nickname)
    postNickname(nickname)
    setNickname('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value)
    const words = event.target.value.split('')
    if (event.target.value.length != 0) {
      setCheckNickname(true)
    } else if (event.target.value.length == 0) {
      setCheckNickname(false)
    }
    for (const item of words) {
      if (!item.match(/[ㄱ-ㅎ가-힣0-9a-z,A-Z._]/)) {
        setCheckNickname(false)
        break
      }
    }
  }

  const onClickClear = () => {
    setNickname('')
  }

  return (
    <>
      <div className="nickname-wrapper">
        <div className="nickname-description">
          <span>야호! 마음 먹었군요!</span>
          <span>마음 먹어 주셔서 감사해요</span>
        </div>
        <div className="nickname-input-wrapper">
          <label className="nickname-input-title">닉네임을 입력하세요.</label>
          <div
            className={`nickname-rule ${
              !checkNickname && nickname != '' ? 'rule-negative' : 'rule-positive'
            }`}
          >
            최대 3자까지, 한글, 영어, 숫자, (, . _) 가능
          </div>
          <input
            className={`nickname-input ${
              !checkNickname && nickname != '' ? 'input-negative' : 'input-positive'
            }`}
            type="text"
            placeholder="닉네임"
            required
            maxLength={3}
            value={nickname}
            onChange={handleChange}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength)
            }}
          />
          <button
            type="button"
            className="clear-button"
            onClick={onClickClear}
          />
          <div className="nickname-warning">닉네임은 이후 수정이 불가하니 신중히 정해주세요!</div>
        </div>
      </div>
      <BoxButton
        type="submit"
        text="저장"
        isDisabled={!checkNickname}
        onClick={handleSubmit}
      />
    </>
  )
}

export default Nickname
