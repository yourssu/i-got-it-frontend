import React from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { useRecoilState } from 'recoil'

import { selectedCheerState, showDialogState } from '@/State/resolutionCheerState'

import styles from './SelectedCheerDialog.module.scss'

const SelectedCheerDialog = () => {
  const [selectedCheer] = useRecoilState(selectedCheerState)

  const [showDialog, setShowDialog] = useRecoilState(showDialogState)

  return (
    <Dialog.Root open={showDialog}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={(e) => {
            e.stopPropagation
            setShowDialog(false)
          }}
          className={styles.DialogOverlay}
        />
        <Dialog.Content className={styles.DialogContent}>
          <div className={styles.cheer}>
            <div className={styles.comment}>{selectedCheer.comment}</div>
            <div className={styles.writer}>~~{selectedCheer.writer}~~</div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SelectedCheerDialog
