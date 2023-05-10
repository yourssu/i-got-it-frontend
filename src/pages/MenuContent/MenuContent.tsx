import React, { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

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
        if (
          !outside.current?.contains(e.target as HTMLDivElement) &&
          !showDialog2 &&
          !showDialog1 &&
          !showLogout &&
          !showPolicyDialog
        ) {
          setOpenMenu(false) // => Dialog가 떠있을 때 menu bar가 닫기지 않게 함
        }
      }
      document.addEventListener('mousedown', handleClose)
      return () => {
        document.removeEventListener('mousedown', handleClose)
      }
    }
  }, [openMenu, showDialog1, showDialog2, showLogout, showPolicyDialog])

  const onClickLogin = () => {
    navigate('/login')
  }

  const onClickList1 = () => {
    setShowDialog1(true)
  }

  const onCloseList1 = () => {
    setShowDialog1(false)
  }

  const onClickList2 = () => {
    setShowDialog2(true)
  }

  const onCloseList2 = () => {
    setShowDialog2(false)
  }

  const onClickList3 = () => {
    navigate('/terms')
  }

  const onClickPolicy = () => {
    setShowPolicyDialog(true)
  }

  const onClosePolicy = () => {
    setShowPolicyDialog(false)
  }

  const onClickLogout = () => {
    setShowLogout(true)
  }

  const onClickConfirmLogout = () => {
    sessionStorage.clear()
    TokenService.logout()
    setNameState('')
    setUserId(-1)
    setResolutionId('')
    navigate('/login')
  }

  const onClickRejectLogout = () => {
    setShowLogout(false)
  }
  
  const onClickWithdraw = () => {
    setShowWithdraw(true)
  }
  
  const onClickConfirmWithdraw = () => {
    deleteWithdraw()
    sessionStorage.clear()
    TokenService.logout()
    setNameState('')
    setUserId(-1)
    setResolutionId('')
    navigate('/login')
  }

  const onClickRejectWithdraw = () => {
    setShowWithdraw(false)
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
        ref={outside}
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
            <a href="https://pf.kakao.com/_viUxkxj">문의 및 제안</a>
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
