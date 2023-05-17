import React from 'react'

import { GetLetterInfo } from '@/Types/letter'
import AddButton from '@/components/Button/AddButton/AddButton'
import NameTag1 from '@/images/Cheer/name_tag_1.svg'
import NameTag2 from '@/images/Cheer/name_tag_2.svg'
import NameTag3 from '@/images/Cheer/name_tag_3.svg'

import CommentBubble from './CommnetBubble'
import UserNameTag from './UserNameTag'

type CheerProps = {
  isHost: boolean
  letters: GetLetterInfo[] | null
}
const Cheer = ({ isHost, letters }: CheerProps) => {
  const imgPath = [NameTag1, NameTag2, NameTag3]

  return (
    <div className="cheer">
      {!isHost ? <AddButton /> : null}
      {letters?.reverse().map((data: GetLetterInfo, index: number) => {
        if (index % 2 == 0) {
          return (
            <section
              className="cheer-wrapper"
              key={`${data.nickname}-${data.content}`}
            >
              <UserNameTag
                writer={data.nickname}
                img={imgPath[index % 3]}
              />
              <CommentBubble
                position="left"
                writer={data.nickname}
                comment={data.content}
                commentId={data.letterId}
                isHost={isHost}
              />
            </section>
          )
        } else {
          return (
            <section
              className="cheer-wrapper"
              key={`${data.nickname}-${data.content}`}
            >
              <CommentBubble
                position="right"
                writer={data.nickname}
                comment={data.content}
                commentId={data.letterId}
                isHost={isHost}
              />
              <UserNameTag
                writer={data.nickname}
                img={imgPath[index % 3]}
              />
            </section>
          )
        }
      })}
    </div>
  )
}

export default Cheer
