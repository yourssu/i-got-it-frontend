import React, { MutableRefObject, RefObject, useEffect, useRef } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import styles from './SelectedCheerDialog.module.scss'
import { useRecoilState } from 'recoil'
import { selectedCheerState } from '../../../State/selectedCheerState'

const SelectedCheerDialog = ({
  showDialog,
  setShowDialog,
}: {
  showDialog: boolean
  setShowDialog: (showDialog: boolean) => void
}) => {
  const [selectedCheer] = useRecoilState(selectedCheerState)
  const ref = useRef<HTMLDivElement>(null)
  /* React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>> */
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
