import React, { useState } from 'react'
import BoxButton from '../../components/Button/BoxButton'
import { useNavigate } from 'react-router-dom'
import './Nickname.scss'

const Nickname = () => {
  const navigate = useNavigate()
  const [nickname, setNickname] = useState<string>('')
  let checkNickname = true

  const handleSubmit = () => {
    // 서버에 보내주는 로직
    const words = nickname.split('')

    for(let item of words) {
      if(!item.match(/[ㄱ-ㅎ가-힣0-9a-z,._]/)) {
        checkNickname = false
      }
    }

    if(checkNickname) {
      setNickname('')
      navigate('/')
    } else {
      // 토스트 메시지 띄우기
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value)
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
            className="nickname-input"
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
            isDisabled={!nickname}
            onClick={handleSubmit}
          />
      </div>
    </div>
  )
}

export default Nickname