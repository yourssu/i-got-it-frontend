import React from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import styles from './PolicyDialog.module.scss'

const PolicyDialog = ({ showDialog, onClose }: { showDialog: boolean; onClose: () => void }) => {
  return (
    <Dialog.Root open={showDialog}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={(e) => {
            e.stopPropagation
            onClose()
          }}
          className={styles.DialogOverlay}
        />
        <Dialog.Content className={styles.DialogContent}>
          <button
            className={styles.closeButton}
            onClick={onClose}
          />
          <div className={styles.wrapper}>
            <Dialog.Title className={styles.DialogTitle}>개인정보 처리방침</Dialog.Title>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default PolicyDialog
