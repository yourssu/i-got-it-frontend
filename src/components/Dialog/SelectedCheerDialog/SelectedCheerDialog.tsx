import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import styles from './SelectedCheerDialog.module.scss'
import { useRecoilState } from 'recoil'
import { selectedCheerState } from '../../../State/selectedCheerState'

const SelectedCheerDialog = () => {
  const [selectedCheer] = useRecoilState(selectedCheerState)
  console.log(selectedCheer.comment)

  return (
    <Dialog.Root open={selectedCheer.writer != '' || selectedCheer.comment != ''}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Description className={styles.DialogDescription}>
            <div className={styles.cheer}>
              <span className={styles.comment}>{selectedCheer.comment}</span>
              <span className={styles.writer}>~~{selectedCheer.writer}~~</span>
            </div>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SelectedCheerDialog
