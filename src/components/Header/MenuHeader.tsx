import React, { useEffect, useRef } from 'react'

import './MenuHeader.scss'

interface Iprops {
  onClickMenu?: () => void
  onClickDot?: () => void
  isDotMenuShow: boolean
  setOpenDotMenu?: (openDotMenu: boolean) => void
  openDotMenu: boolean
  setShowDialog?: (showDialog: boolean) => void
}

const MenuHeader = (props: Iprops) => {
  const { onClickMenu, onClickDot, isDotMenuShow, setOpenDotMenu, openDotMenu, setShowDialog } =
    props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isDotMenuShow) {
      const handleClose = (e: MouseEvent) => {
        if (openDotMenu && ref.current && !ref.current.contains(e.target as HTMLElement)) {
          setOpenDotMenu!(false)
        }
      }
      document.addEventListener('mousedown', handleClose)
      return () => {
        document.removeEventListener('mousedown', handleClose)
      }
    }
  }, [openDotMenu])

  const onClickDelete = () => {
    setShowDialog!(true)
    setOpenDotMenu!(false)
  }

  return (
    <header className="menu-header">
      <button
        type="button"
        className="menu-button"
        onClick={onClickMenu}
      />
      <button
        type="button"
        className={isDotMenuShow ? 'delete-button' : ''}
        onClick={onClickDot}
      />
      {openDotMenu ? (
        <div
          className="delete-menu"
          onClick={onClickDelete}
          ref={ref}
        >
          <span>결심 삭제하기ㅠ</span>
        </div>
      ) : null}
    </header>
  )
}

export default MenuHeader
