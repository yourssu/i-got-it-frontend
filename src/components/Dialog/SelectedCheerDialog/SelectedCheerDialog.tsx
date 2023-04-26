import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import styles from './SelectedCheerDialog.module.scss'
import { useRecoilState } from 'recoil'
import { selectedCheerState } from '../../../State/selectedCheerState'

const SelectedCheerDialog = () => {
  const [selectedCheer] = useRecoilState(selectedCheerState)

  return (
    <Dialog.Root open={selectedCheer.writer != ''}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
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
