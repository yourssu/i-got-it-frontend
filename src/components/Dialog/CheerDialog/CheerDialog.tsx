import React, { useEffect, useRef, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useRecoilState } from 'recoil'
import { addCheerState } from '../../../State/resolutionCheerState'
import styles from './CheerDialog.module.scss'
import BoxButton from '../../Button/BoxButton/BoxButton'
import { usePostLetters } from '../../../hooks/usePostLetters'
import { resolutionIdState } from '../../../State/resolutionState'

const CheerDialog = () => {
  const [addCheer, setAddCheer] = useRecoilState(addCheerState)
  const [resolutionId] = useRecoilState(resolutionIdState)
  const [nickname, setNickname] = useState<string>('')
  const [checkNickname, setCheckNickname] = useState<boolean>(false)
  const [content, setContent] = useState<string>('')
  const [inputCount, setInputCount] = useState<number>(0)
  const { mutate: postLetters } = usePostLetters()

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (addCheer && ref.current && !ref.current.contains(e.target as HTMLElement)) {
        setAddCheer(false)
      }
    }

    document.addEventListener('mousedown', handleClose)
    return () => {
      document.removeEventListener('mousedown', handleClose)
    }
  }, [addCheer])

  const handleSubmit = () => {
    postLetters({ resolutionId, nickname, content })
    setNickname('')
    setContent('')
    setCheckNickname(false)
    setAddCheer(false)
  }

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
    const words = e.target.value.split('')
    if (e.target.value.length != 0) {
      setCheckNickname(true)
    } else if (e.target.value.length == 0) {
      setCheckNickname(false)
    }
    for (let item of words) {
      if (!item.match(/[ㄱ-ㅎㅏ-ㅣ가-힣]/)) {
        setCheckNickname(false)
        break
      }
    }
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    setInputCount(e.target.value.length)
  }

  return (
    <Dialog.Root open={addCheer}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content
          className={styles.DialogContent}
          ref={ref}
        >
          <div className={styles.CheerInputWrapper}>
            <div>
              <div
                className={`${styles.NicknameInputRule} ${
                  !checkNickname && nickname != '' ? styles.RuleNegative : styles.RulePositive
                }`}
              >
                한글 석자 이하만 가능
              </div>
              <input
                className={`${styles.NicknameInput} ${
                  !checkNickname && nickname != '' ? styles.InputNegative : styles.InputPositive
                }`}
                id="Nickname"
                value={nickname}
                placeholder="보낸 사람 이름"
                maxLength={3}
                onChange={handleNicknameChange}
                onInput={(e: any) => {
                  // 타입 재설정 해야함.
                  if (e.target.value.length > e.target.maxLength)
                    e.target.value = e.target.value.slice(0, e.target.maxLength)
                }}
              />
            </div>
            <div className={styles.TextareaWrapper}>
              <textarea
                className={styles.CheerInput}
                required
                maxLength={133}
                value={content}
                placeholder="친구에게 응원의 한마디를 전해주세요."
                onChange={handleContentChange}
                rows={10}
              />
              <span className={styles.InputCount}>{`${inputCount}/133`}</span>
            </div>
          </div>
          <BoxButton
            type="button"
            text="작성 완료"
            isDisabled={!content && !checkNickname}
            onClick={handleSubmit}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CheerDialog
