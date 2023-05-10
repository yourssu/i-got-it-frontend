import React, { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Cookies from 'universal-cookie'

import { nicknameState } from '@/State/nicknameState'
import { resolutionIdState } from '@/State/resolutionState'
import { userIdState } from '@/State/userIdState'
import BasicDialog from '@/components/Dialog/BasicDialog/BasicDialog'
import IntroductionDialog from '@/components/Dialog/IntroductionDialog/IntroductionDialog'
import PolicyDialog from '@/components/Dialog/PolicyDialog/PolicyDialog'
import ProducerDialog from '@/components/Dialog/ProducerDialog/ProducerDialog'
import './MenuContent.scss'
import { useDeleteWithdraw } from '@/hooks/useDeleteWithdraw'
import TokenService from '@/services/TokenService'

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
  const [showWithdraw, setShowWithdraw] = useState(false)
  const [showPolicyDialog, setShowPolicyDialog] = useState(false)
  const [nameState, setNameState] = useRecoilState(nicknameState)
  const [userId, setUserId] = useRecoilState(userIdState)
  const [, setResolutionId] = useRecoilState(resolutionIdState)
  const { mutate: deleteWithdraw } = useDeleteWithdraw()

  useEffect(() => {
    if (openMenu) {
      const handleClose = (e: MouseEvent) => {
        if (outside.current && !outside.current?.contains(e.target as HTMLDivElement)) {
          setOpenMenu(false)
        }
      }
      document.addEventListener('mousedown', handleClose)
      return () => {
        document.removeEventListener('mousedown', handleClose)
      }
    }
  }, [openMenu])

  const onClickLogin = () => {
    if (!showDialog1 && !showDialog2 && !showLogout && !showWithdraw && !showPolicyDialog) {
      navigate('/login')
    }
  }

  const onClickList1 = () => {
    if (!showDialog2 && !showLogout && !showWithdraw && !showPolicyDialog) {
      setShowDialog1(true)
    }
  }

  const onCloseList1 = () => {
    setShowDialog1(false)
  }

  const onClickList2 = () => {
    if (!showDialog1 && !showLogout && !showWithdraw && !showPolicyDialog) {
      setShowDialog2(true)
    }
  }

  const onCloseList2 = () => {
    setShowDialog2(false)
    setOpenMenu(true)
  }

  const onClickList3 = () => {
    if (!showDialog1 && !showDialog2 && !showLogout && !showWithdraw && !showPolicyDialog) {
      navigate('/terms')
    }
  }

  const onClickLogout = () => {
    if (!showDialog1 && !showDialog2 && !showWithdraw && !showPolicyDialog) {
      setShowLogout(true)
    }
  }

  const onClickWithdraw = () => {
    if (!showDialog1 && !showDialog2 && !showLogout && !showPolicyDialog) {
      setShowWithdraw(true)
    }
  }

  const onClickConfirmLogout = () => {
    const cookies = new Cookies()
    sessionStorage.clear()
    cookies.remove('accessToken')
    TokenService.logout()
    setNameState('')
    setUserId(-1)
    setResolutionId('')
    navigate('/login')
  }

  const onClickRejectLogout = () => {
    setShowLogout(false)
    setOpenMenu(true)
  }

  const onClickConfirmWithdraw = () => {
    deleteWithdraw()
    sessionStorage.clear()
    TokenService.logout
    setNameState('')
    setUserId(-1)
    setResolutionId('')
    navigate('/login')
  }

  const onClickRejectWithdraw = () => {
    setShowWithdraw(false)
    setOpenMenu(true)
  }

  const onClickPolicy = () => {
    if (!showDialog1 && !showDialog2 && !showLogout && !showWithdraw) {
      setShowPolicyDialog(true)
    }
  }

  const onClosePolicy = () => {
    setShowPolicyDialog(false)
    setOpenMenu(true)
  }

  return (
    <div
      style={{
        opacity: openMenu ? 1 : 0,
      }}
      className="menu-wrapper"
    >
      <div
        className={openMenu ? 'menu-list show-menu' : 'menu-list hide-menu'}
        ref={
          showDialog1 || showDialog2 || showLogout || showWithdraw || showPolicyDialog
            ? null
            : outside
        }
      >
        <ul>
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
            <a
              href="https://pf.kakao.com/_viUxkxj"
              onClick={(e) => {
                if (showDialog1 || showDialog2 || showLogout || showWithdraw || showPolicyDialog) {
                  e.preventDefault()
                }
              }}
            >
              문의 및 제안
            </a>
          </li>
          <li
            className="menu-content"
            onClick={onClickList3}
          >
            이용약관
          </li>
          <li
            className="menu-content-policy"
            onClick={onClickPolicy}
          >
            개인정보 처리방침
          </li>
          <PolicyDialog
            showDialog={showPolicyDialog}
            onClose={onClosePolicy}
          />
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
        {userId !== -1 ? (
          <li
            className="menu-content-withdraw"
            onClick={onClickWithdraw}
          >
            서비스 탈퇴하기
          </li>
        ) : null}
        <BasicDialog
          showDialog={showWithdraw}
          title="정말 탈퇴하시겠어요...?"
          description={`탈퇴할 경우 서비스를 더이상 이용하실 수 없어요ㅠ
          우리의 인연.... 여기까지인가요...?`}
          onConfirm={onClickConfirmWithdraw}
          onReject={onClickRejectWithdraw}
          confirm="탈퇴ㅠ"
          reject="취소"
        />
      </div>
    </div>
  )
}

export default MenuContent
