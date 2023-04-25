import { useEffect, useRef } from 'react'
import './MenuContent.scss'

const MenuContent = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean
  setOpenMenu: (openMenu: boolean) => void
}) => {
  const outside = useRef<any>() // type 변경해야 함

  const handleClose = async (e: any) => {
    if (!outside.current.contains(e.target)) {
      setOpenMenu(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClose)

    return () => {
      document.removeEventListener('mousedown', handleClose)
    }
  })

  return (
    <div className="menu-wrapper">
      <div ref={outside}>
        <ul className={openMenu ? 'show-menu' : 'hide-menu'}>
          <li className="nickname">닉네임</li>
          <li className="menu-content">아가릿!이 궁금해요</li>
          <li className="menu-content">만든 사람들</li>
          <li className="menu-content">문의 및 제안</li>
          <li className="menu-content">이용약관</li>
          <li className="menu-content">로그아웃</li>
        </ul>
      </div>
    </div>
  )
}

export default MenuContent
