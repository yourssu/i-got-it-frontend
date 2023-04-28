import React, { useEffect, useRef } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import styles from './SelectedCheerDialog.module.scss'
import { useRecoilState } from 'recoil'
import { selectedCheerState, showDialogState } from '../../../State/resolutionCheerState'

const SelectedCheerDialog = () => {
  const [selectedCheer] = useRecoilState(selectedCheerState)
  const ref = useRef<HTMLDivElement>(null)
  const [showDialog, setShowDialog] = useRecoilState(showDialogState)

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (showDialog && ref.current && !ref.current.contains(e.target as HTMLElement)) {
        setShowDialog(false)
      }
    }

    document.addEventListener('mousedown', handleClose)
    return () => {
      document.removeEventListener('mousedown', handleClose)
    }
  }, [showDialog])

  return (
    <>
      {showDialog && (
        <Dialog.Root open={selectedCheer.writer != ''}>
          <Dialog.Portal>
            <Dialog.Overlay className={styles.DialogOverlay} />
            <Dialog.Content
              className={styles.DialogContent}
              ref={ref}
            >
              <div className={styles.cheer}>
                <div className={styles.comment}>{selectedCheer.comment}</div>
                <div className={styles.writer}>~~{selectedCheer.writer}~~</div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </>
  )
}

export default SelectedCheerDialog
