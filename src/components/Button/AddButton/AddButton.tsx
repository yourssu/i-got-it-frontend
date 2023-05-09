import React from 'react'

import { useRecoilState } from 'recoil'

import { addCheerState } from '@/State/resolutionCheerState'
import AddBtn from '@/images/Cheer/add_button.svg'

import './AddButton.scss'

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
        src={AddBtn}
        alt={AddBtn}
      />
    </div>
  )
}

export default AddButton
