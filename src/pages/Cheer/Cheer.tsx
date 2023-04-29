import React from 'react'
import NameTag1 from '../../images/Cheer/name_tag_1.svg'
import NameTag2 from '../../images/Cheer/name_tag_2.svg'
import NameTag3 from '../../images/Cheer/name_tag_3.svg'
import UserNameTag from './UserNameTag'
import CommentBubble from './CommnetBubble'
import { useRecoilState } from 'recoil'
import { GetLetterInfo } from '../../Types/letter'
import { userIdState } from '../../State/loginState'
import AddButton from '../../components/Button/AddButton/AddButton'

type test = {
  letters: GetLetterInfo[] | null
}
const Cheer = ({ letters }: test) => {
  const imgPath = [NameTag1, NameTag2, NameTag3]
  const [userId] = useRecoilState(userIdState)

  return (
    <div className="cheer">
      {userId == -1 ? <AddButton /> : null}
      {letters!.map((data: GetLetterInfo, index: number) => {
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
                commentId={index} // data.letterId로 변경 예정
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
                commentId={index} // data.letterId로 변경 예정
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
