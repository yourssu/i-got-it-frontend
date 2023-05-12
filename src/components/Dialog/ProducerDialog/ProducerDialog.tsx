import React from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import styles from './ProducerDialog.module.scss'

const ProducerDialog = ({ showDialog, onClose }: { showDialog: boolean; onClose: () => void }) => {
  return (
    <Dialog.Root open={showDialog}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={(e) => {
            e.stopPropagation
            onClose()
          }}
          className="DialogOverlay"
        />
        <Dialog.Content className={styles.DialogContent}>
          <button
            className={styles.closeButton}
            onClick={onClose}
          />
          <div className={styles.wrapper1}>
            <Dialog.Title className={styles.DialogTitle}>
              {'아가리파이터들이\n만들었어요.'}
            </Dialog.Title>
            <Dialog.Description className={styles.DialogDescription}>
              {`안녕하세요! 💋💋💋\n만든 사람들을 궁금해해 주시다니 감.사.해.요.\n\n저희는 🐴말로 하는 공부를 제일 잘하는
              대학생들 ‘아가리 파이터’입니다.\n\n“아가릿!만 만들고 진짜 공부할 거예요.”
              아가릿!은 중간고사 때 쓴 편지가 기말고사 때 전해지면 어떨까? 라는 아이디어에서 시작했어요. 왜 시험 기간엔 뭐든 재밌는 걸까요? `}
            </Dialog.Description>
            <div className={styles.producer}>{`PM 🐱Edna 기획 🐯Willow
            디자인 💗Rozy 🐻Mishika
            Web Front 🐥Mina 😎Hanna
            Back end ☁️Haneul
            Legal 🍀Julia 🫡Rhea

            Thanks to
            ⚽️Jay 🧞‍♂️Dino 🧸Ted 🌱Mint
            🐴 뿌슝이 🦄 숭실대학교 유어슈`}</div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ProducerDialog
