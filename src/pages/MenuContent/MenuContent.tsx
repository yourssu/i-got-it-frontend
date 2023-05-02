import React, { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Cookies from 'universal-cookie'

import { nicknameState } from '@/State/nicknameState'
import { resolutionIdState } from '@/State/resolutionState'
import { userIdState } from '@/State/userIdState'
import BasicDialog from '@/components/Dialog/BasicDialog/BasicDialog'
import IntroductionDialog from '@/components/Dialog/IntroductionDialog/IntroductionDialog'
import ProducerDialog from '@/components/Dialog/ProducerDialog/ProducerDialog'
import './MenuContent.scss'

const MenuContent = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean
  setOpenMenu: (openMenu: boolean) => void
}) => {
  const outside = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const [showDialog1, setShowDialog1] = useState(false)
  const [showDialog2, setShowDialog2] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  const [nameState, setNameState] = useRecoilState(nicknameState)
  const [userId, setUserId] = useRecoilState(userIdState)
  const [, setResolutionId] = useRecoilState(resolutionIdState)

  useEffect(() => {
    if (openMenu) {
      const handleClose = (e: MouseEvent) => {
        if (
          !outside.current?.contains(e.target as HTMLDivElement) &&
          !showDialog2 &&
          !showDialog1 &&
          !showLogout
        ) {
          setOpenMenu(false) // => Dialog가 떠있을 때 menu bar가 닫기지 않게 함
        }
      }
      document.addEventListener('mousedown', handleClose)
      return () => {
        document.removeEventListener('mousedown', handleClose)
      }
    }
  }, [openMenu])

  const onClickLogin = () => {
    navigate('/login')
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
    const cookies = new Cookies()
    sessionStorage.clear()
    cookies.remove('accessToken')
    setNameState('')
    setUserId(-1)
    setResolutionId('')
    navigate('/login')
  }

  const onClickRejectLogout = () => {
    setShowLogout(false)
    setOpenMenu(true)
  }

  return (
    <div
      style={{
        opacity: openMenu ? 1 : 0,
      }}
      className="menu-wrapper"
    >
      <div ref={outside}>
        <ul className={openMenu ? 'menu-list show-menu' : 'menu-list hide-menu'}>
          {userId !== -1 ? (
            <li className="nickname">{nameState}</li>
          ) : (
            <li
              className="nickname"
              onClick={onClickLogin}
            >
              로그인하러가기
            </li>
          )}
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
          {userId !== -1 ? (
            <li
              className="menu-content"
              onClick={onClickLogout}
            >
              로그아웃
            </li>
          ) : null}
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
