import React from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import styles from './LetterDialog.module.scss'

const LetterDialog = ({
  showDialog,
  description,
  onClose,
}: {
  showDialog: boolean
  description?: string
  onClose: () => void
}) => {
  return (
    <Dialog.Root open={showDialog}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={styles.DialogOverlay}
          onClick={(e) => {
            e.stopPropagation
            onClose()
          }}
        />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Description className={styles.DialogDescription}>
            {description}
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default LetterDialog
