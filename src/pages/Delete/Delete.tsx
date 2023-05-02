import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import BoxButton from '@/components/Button/BoxButton/BoxButton'
import MenuHeader from '@/components/Header/MenuHeader'

import './Delete.scss'

import MenuContent from '../MenuContent/MenuContent'

const Delete = () => {
  const naviagte = useNavigate()
  const [openMenu, setOpenMenu] = useState(false)

  const onClick = () => {
    naviagte('/')
  }

  const onClickMenu = () => {
    setOpenMenu((openMenu) => !openMenu)
  }

  return (
    <>
      <MenuContent
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <MenuHeader
        onClickMenu={onClickMenu}
        isDotMenuShow={false}
        openDotMenu={false}
      />
      <div className="delete-wrapper">
        <div className="delete-description-wrapper">
          <div className="home-title">아가릿!</div>
          <div className="delete-description">
            <span>작성자에 의해 삭제된 결심이에요ㅠ</span>
            <span>이참에 결심의 &quot;주인공&quot;이</span>
            <span>되어보시겠어요?</span>
          </div>
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
