import React, { useState } from 'react'
import BoxButton from '../../components/Button/BoxButton'
import { useNavigate } from 'react-router-dom'
import './Nickname.scss'

const Nickname = () => {
  const navigate = useNavigate()
  const [nickname, setNickname] = useState<string>('')
  const [checkNickname, setCheckNickname] = useState<boolean>(false)

  const handleSubmit = () => {
    // 서버에 보내주는 로직
    setNickname('')
    navigate('/')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value)
    const words = event.target.value.split('')
    console.log(event.target.value.length)
    if (event.target.value.length != 0) {
      setCheckNickname(true)
    } else if (event.target.value.length == 0) {
      setCheckNickname(false)
    }
    for (let item of words) {
      if (!item.match(/[ㄱ-ㅎ가-힣0-9a-z,._]/)) {
        setCheckNickname(false)
        break
      }
    }
  }
  return (
    <div className="nickname-wrapper">
      <div className="nickname-description">
        <span>야호! 마음 먹었군요!</span>
        <span>마음 먹어 주셔서 감사해요</span>
      </div>
      <div className="nickname-input-wrapper">
        <label className="nickname-input-title">닉네임을 입력하세요.</label>
        <div className="nickname-rule">최대 3자까지, 한글, 영어, 숫자, (, . _) 가능</div>
        <input
          className={`nickname-input ${!checkNickname && nickname != '' ? 'negative' : 'positive'}`}
          type="text"
          placeholder="닉네임"
          required
          maxLength={3}
          value={nickname}
          onChange={handleChange}
        />
        <div className="nickname-warning">닉네임은 이후 수정이 불가하니 신중히 정해주세요!</div>
        <BoxButton
          type="submit"
          text="저장"
          isDisabled={!checkNickname}
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default Nickname
