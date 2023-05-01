import React from 'react'

import { useNavigate } from 'react-router-dom'

import BoxButton from '@/components/Button/BoxButton/BoxButton'
import './Delete.scss'

const Delete = () => {
  const naviagte = useNavigate()

  const onClick = () => {
    naviagte('/')
  }
  return (
    <>
      <div className="delete-wrapper">
        <div className="delete-description">
          <span>작성자에 의해 삭제된 결심이에요ㅠ</span>
          <span>이참에 결심의 &quot;주인공&quot;이</span>
          <span>되어보시겠어요?</span>
        </div>
        <div className="recommend"> ↘ would you,,? ↙ </div>
      </div>
      <BoxButton
        type="button"
        text="결심하기"
        onClick={onClick}
      />
    </>
  )
}

export default Delete
