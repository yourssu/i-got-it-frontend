import React from 'react'
import './MenuHeader.scss'

interface Iprops {
  onClick?: () => void
}

const MenuHeader = (props: Iprops) => {
  const { onClick } = props
  return (
    <header className="menu-header">
      <button
        type="button"
        className="menu-button"
        onClick={onClick}
      />
    </header>
  )
}

export default MenuHeader
