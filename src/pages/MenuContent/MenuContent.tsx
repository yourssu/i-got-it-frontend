import React, { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { nicknameState } from '@/State/nicknameState'
import BasicDialog from '@/components/Dialog/BasicDialog/BasicDialog'
import IntroductionDialog from '@/components/Dialog/IntroductionDialog/IntroductionDialog'
import ProducerDialog from '@/components/Dialog/ProducerDialog/ProducerDialog'

const MenuContent = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean
  setOpenMenu: (openMenu: boolean) => void
}) => {
  const outside = useRef<any>() // type 변경해야 함
  const navigate = useNavigate()
  const [showDialog1, setShowDialog1] = useState(false)
  const [showDialog2, setShowDialog2] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  const [nameState] = useRecoilState(nicknameState)

  const handleClose = async (e: any) => {
    if (!outside.current.contains(e.target) && !showDialog2 && !showDialog1 && !showLogout) {
      // => Dialog가 떠있을 때 menu bar가 닫기지 않게 함
      setOpenMenu(false)
    }
  }

  const onClickList1 = () => {
    setShowDialog1(true)
    setOpenMenu(true)
  }

  const onCloseList1 = () => {
    setShowDialog1(false)
    setOpenMenu(true) // 다이얼로그가 외부 영역으로 인식되어 Menu가 닫기는 현상 방지
  }

  const onClickList2 = () => {
    setShowDialog2(true)
    setOpenMenu(true)
  }

  const onCloseList2 = () => {
    setShowDialog2(false)
    setOpenMenu(true)
  }

  const onClickList3 = () => {
    navigate('/terms')
  }

  const onClickLogout = () => {
    setShowLogout(true)
  }

  const onClickConfirmLogout = () => {
    // logout 처리 로직
  }

  const onClickRejectLogout = () => {
    setShowLogout(false)
    setOpenMenu(true)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClose)

    return () => {
      document.removeEventListener('mousedown', handleClose)
    }
  })

  return (
    <div
      style={{
        opacity: openMenu ? 1 : 0,
      }}
      className="menu-wrapper"
    >
      <div ref={outside}>
        <ul className={openMenu ? 'menu-list show-menu' : 'menu-list hide-menu'}>
          <li className="nickname">{nameState}</li>
          <li
            className="menu-content"
            onClick={onClickList1}
          >
            아가릿!이 궁금해요
          </li>
          <IntroductionDialog
            showDialog={showDialog1}
            onClose={onCloseList1}
          />
          <li
            className="menu-content"
            onClick={onClickList2}
          >
            만든 사람들
          </li>
          <ProducerDialog
            showDialog={showDialog2}
            onClose={onCloseList2}
          />
          <li className="menu-content">
            <a href="https://pf.kakao.com/_viUxkxj">문의 및 제안</a>
          </li>
          <li
            className="menu-content"
            onClick={onClickList3}
          >
            이용약관
          </li>
          <li
            className="menu-content"
            onClick={onClickLogout}
          >
            로그아웃
          </li>
          <BasicDialog
            showDialog={showLogout}
            title="로그아웃 하시겠습니까?"
            onConfirm={onClickConfirmLogout}
            onReject={onClickRejectLogout}
            confirm="넹"
            reject="그.럴.리.가"
          />
        </ul>
      </div>
    </div>
  )
}

export default MenuContent
