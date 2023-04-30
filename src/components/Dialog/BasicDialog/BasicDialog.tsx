import React from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import styles from './BasicDialog.module.scss'

const BasicDialog = ({
  showDialog,
  title,
  description,
  onConfirm,
  onReject,
  confirm,
  reject,
}: {
  showDialog: boolean
  title?: string
  description?: string
  onConfirm: () => void
  onReject: () => void
  confirm: string
  reject: string
}) => {
  return (
    <Dialog.Root open={showDialog}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={styles.DialogOverlay}
          onClick={(e) => {
            e.stopPropagation
            onReject()
          }}
        />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>{title}</Dialog.Title>
          <Dialog.Description className={styles.DialogDescription}>
            {description}
          </Dialog.Description>
          <div className={styles.buttonWrapper}>
            <button
              onClick={onReject}
              className={styles.dialogButton}
            >
              {reject}
            </button>
            <button
              onClick={onConfirm}
              className={styles.dialogButton}
            >
              {confirm}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default BasicDialog
