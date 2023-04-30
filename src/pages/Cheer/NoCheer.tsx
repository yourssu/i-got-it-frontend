import React from 'react'

import AddButton from '@/components/Button/AddButton/AddButton'

const NoCheer = ({ isHost }: { isHost: boolean }) => {
  return (
    <>
      {!isHost ? (
        <div className="no-cheer">
          <AddButton />
          <div className=" guest">
            <span>뱉은 말을 응원하는 말을</span>
            <span>작성해주세요</span>
          </div>
        </div>
      ) : (
        <div className="no-cheer host">
          <span>아직 당신을 응원하는 친구가 없어요ㅠ</span>
          <span>링크를 공유해서 친구들의 응원을 쟁.취.하세요.</span>
        </div>
      )}
    </>
  )
}

export default NoCheer
