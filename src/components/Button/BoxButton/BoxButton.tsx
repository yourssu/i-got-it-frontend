import React from 'react'

import './BoxButton.scss'

interface Iprops {
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  isDisabled?: boolean
}

const BoxButton = (props: Iprops) => {
  const { text, type, onClick, isDisabled } = props
  return (
    <div className="box-button-wrapper">
      <button
        className="box-button"
        onClick={onClick}
        type={type}
        disabled={isDisabled}
      >
        {text}
      </button>
    </div>
  )
}

export default BoxButton
