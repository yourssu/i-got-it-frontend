import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import styles from './DeleteCheerDialog.module.scss'
import { useRecoilState } from 'recoil'
import { cheerCommentState } from '../../../State/cheerCommentState'

type DeleteCheerDialogProps = {
  dialogTitle: string
  dialogDescription: string
  confirmText: string
  rejectText: string
  onConfirm: () => void // 서버랑 연결 후 수정될 예정
  onReject: () => void
}

const DeleteCheerDialog = ({
  dialogTitle,
  dialogDescription,
  confirmText,
  rejectText,
  onConfirm,
  onReject,
}: DeleteCheerDialogProps) => {
  const [commentState] = useRecoilState(cheerCommentState)

  return (
    <Dialog.Root open={commentState != -1}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>{dialogTitle}</Dialog.Title>
          <Dialog.Description className={styles.DialogDescription}>
            {dialogDescription}
          </Dialog.Description>
          <div className={styles.ButtonWrapper}>
            <button
              onClick={onReject}
              className={styles.DialogButton}
            >
              {rejectText}
            </button>
            <button
              onClick={onConfirm}
              className={styles.DialogButton}
            >
              {confirmText}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DeleteCheerDialog
