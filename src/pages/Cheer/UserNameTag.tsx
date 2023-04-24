import React from 'react'

type UserNameTagType = {
  position: string
  writer: string
  img: string
}

const UserNameTag = ({ position, writer, img }: UserNameTagType) => {
  return (
    <div className={`tag-wrapper ${position}`}>
      <span className="tag-name">{writer}</span>
      <img className="tag-image" src={img} alt="name-tag" />
    </div>
  )
}

export default UserNameTag