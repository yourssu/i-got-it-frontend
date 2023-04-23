import React, { useState } from 'react'
import BoxButton from '../../components/Button/BoxButton'
import { useNavigate } from 'react-router-dom'

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
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value)
  }
  return (
    <div>
      <div>
        <p>야호! 마음 먹었군요!</p>
        <p>마음 먹어 주셔서 감사해요</p>
      </div>
      <div>
        <label className="title">닉네임을 입력하세요.</label>
          <div className="description">최대 3자까지, 한글, 영어, 숫자, (, . _) 가능</div>
          <input
            type="text"
            placeholder="닉네임"
            required
            maxLength={3}
            value={nickname}
            onChange={handleChange}
          />
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