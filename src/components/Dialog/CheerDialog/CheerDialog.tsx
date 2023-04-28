import React, { useRef, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useRecoilState } from 'recoil'
import { addCheerState } from '../../../State/resolutionCheerState'
import styles from './CheerDialog.module.scss'

const CheerDialog = () => {
  const [addCheer] = useRecoilState(addCheerState)
  const [writer, setWriter] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [inputCount, setInputCount] = useState<number>(0)

  const ref = useRef<HTMLTextAreaElement>(null)

  /*const handleResizeHeight = () => {
    ref.current.style.height = 'auto'
    ref.current.style.height= ref.current?.scrollHeight + 'px'
  } */

  const onWriterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value)
  }

  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
              <div className={styles.WriterInputRule}>한글 석자 이하만 가능</div>
              <input
                className={`${styles.WriterInput} test`}
                id="writer"
                value={writer}
                placeholder="보낸 사람 이름"
                onChange={onWriterChange}
              />
            </div>
            <div className={styles.TextareaWrapper}>
              <textarea
                className={styles.CheerInput}
                required
                maxLength={133}
                value={message}
                placeholder="친구에게 응원의 한마디를 전해주세요."
                onChange={onMessageChange}
                ref={ref}
              />
              <span>{`${inputCount}/133`}</span>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CheerDialog
