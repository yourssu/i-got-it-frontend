import React, { useRef, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useRecoilState } from 'recoil'
import { addCheerState } from '../../../State/resolutionCheerState'
import styles from './CheerDialog.module.scss'
import BoxButton from '../../Button/BoxButton/BoxButton'

const CheerDialog = () => {
  const [addCheer] = useRecoilState(addCheerState)
  const [writer, setWriter] = useState<string>('')
  const [checkWriter, setCheckWriter] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const [inputCount, setInputCount] = useState<number>(0)

  /*const handleResizeHeight = () => {
    ref.current.style.height = 'auto'
    ref.current.style.height= ref.current?.scrollHeight + 'px'
  } */

  const handleWriterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value)
    const words = e.target.value.split('')
    if (e.target.value.length != 0) {
      setCheckWriter(true)
    } else if (e.target.value.length == 0) {
      setCheckWriter(false)
    }
    for (let item of words) {
      if (!item.match(/[ㄱ-ㅎ가-힣]/)) {
        setCheckWriter(false)
        break
      }
    }
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
    setInputCount(e.target.value.length)
  }

  return (
    <Dialog.Root open={addCheer}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <div className={styles.CheerInputWrapper}>
            <div>
              <div
                className={`${styles.WriterInputRule} ${
                  !checkWriter && writer != '' ? styles.RuleNegative : styles.RulePositive
                }`}
              >
                한글 석자 이하만 가능
              </div>
              <input
                className={`${styles.WriterInput} ${
                  !checkWriter && writer != '' ? styles.InputNegative : styles.InputPositive
                }`}
                id="writer"
                value={writer}
                placeholder="보낸 사람 이름"
                onChange={handleWriterChange}
              />
            </div>
            <div className={styles.TextareaWrapper}>
              <textarea
                className={styles.CheerInput}
                required
                maxLength={133}
                value={message}
                placeholder="친구에게 응원의 한마디를 전해주세요."
                onChange={handleMessageChange}
                rows={10}
              />
              <span className={styles.InputCount}>{`${inputCount}/133`}</span>
            </div>
          </div>
        </Dialog.Content>
        <BoxButton
          type="submit"
          text="작성 완료"
          isDisabled={!message && !checkWriter}
        />
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CheerDialog
