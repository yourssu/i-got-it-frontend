import React from 'react'

type UserNameTagType = {
  writer: string
  img: string
}

const UserNameTag = ({ writer, img }: UserNameTagType) => {
  return (
    <div className="tag-wrapper">
      <span className="tag-name">{writer}</span>
      <img
        className="tag-image"
        src={img}
        alt="name-tag"
      />
    </div>
  )
}

export default UserNameTag
