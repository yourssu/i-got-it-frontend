import React from 'react'
import Bubble from '@/images/Cheer/comment_bubble.svg'
import AddIcon from '@/images/Cheer/add_icon.svg'
import './AddButton.scss'
import { useRecoilState } from 'recoil'
import { addCheerState } from '@/State/resolutionCheerState'

const AddButton = () => {
  const [, setAddCheer] = useRecoilState(addCheerState)
  const onClick = () => {
    setAddCheer(true)
  }
  return (
    <div
      className="add-button"
      onClick={onClick}
    >
      <img
        className="add-button-icon"
        src={AddIcon}
        alt={AddIcon}
      />
      <img
        className="add-button-bubble"
        src={Bubble}
        alt={Bubble}
      />
    </div>
  )
}

export default AddButton
