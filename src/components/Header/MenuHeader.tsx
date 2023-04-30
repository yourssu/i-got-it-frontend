import './MenuHeader.scss'
import { useEffect, useRef } from 'react'

interface Iprops {
  onClickMenu?: () => void
  onClickDot?: () => void
  isDotMenuShow: boolean
  setOpenDotMenu?: (openDotMenu: boolean) => void
  openDotMenu: boolean
}

const MenuHeader = (props: Iprops) => {
  const { onClickMenu, onClickDot, isDotMenuShow, setOpenDotMenu, openDotMenu } = props
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
    // 결심삭제 로직
    console.log('결심 삭제')
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
