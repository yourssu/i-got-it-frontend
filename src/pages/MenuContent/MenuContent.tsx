import { useEffect, useRef, useState } from 'react'
import './MenuContent.scss'
import IntroductionDialog from '../../components/Dialog/IntroductionDialog/IntroductionDialog'
import ProducerDialog from '../../components/Dialog/ProducerDialog/ProducerDialog'

const MenuContent = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean
  setOpenMenu: (openMenu: boolean) => void
}) => {
  const outside = useRef<any>() // type 변경해야 함
  const [showDialog1, setShowDialog1] = useState(false)
  const [showDialog2, setShowDialog2] = useState(false)

  const handleClose = async (e: any) => {
    if (!outside.current.contains(e.target) && !showDialog2 && !showDialog1) {
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
          <li className="nickname">닉네임</li>
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
          <li className="menu-content">문의 및 제안</li>
          <li className="menu-content">이용약관</li>
          <li className="menu-content">로그아웃</li>
        </ul>
      </div>
    </div>
  )
}

export default MenuContent
