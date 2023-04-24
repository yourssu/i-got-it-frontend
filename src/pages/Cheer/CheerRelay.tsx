import React from 'react'
import NameTag1 from '../../images/Cheer/name_tag_1.svg'
import NameTag2 from '../../images/Cheer/name_tag_2.svg'
import NameTag3 from '../../images/Cheer/name_tag_3.svg'
import UserNameTag from './UserNameTag'
import CommentBubble from './CommnetBubble'
import './CheerRelay.scss'
import { dummy } from './dummy'

const Cheer = () => {
  const imgPath = [NameTag1, NameTag2, NameTag3]

  return (
    <div className="cheer-container">
      <div className="cheer-title">~응원의 릴레이~</div>
      {dummy.map((data, index) => {
        if(index % 2 == 0) {
          return (
            <section className="cheer-wrapper" key={`${data.writer}-${data.comment}`}>
              <UserNameTag
                position="left"
                writer={data.writer}
                img={imgPath[Math.floor(Math.random() * 3)]}
              />
              <CommentBubble
                position="left"
                comment={data.comment}
              />
            </section>
          )
        } else {
          return (
            <section className="cheer-wrapper" key={`${data.writer}-${data.comment}`}>
              <CommentBubble
                position="right"
                comment={data.comment}
              />
              <UserNameTag
                position="right"
                writer={data.writer}
                img={imgPath[Math.floor(Math.random() * 3)]}
              />
            </section>
          )
        }
      })}
    </div>
  )
}

export default Cheer
