import React from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import styles from './EmailDialog.module.scss'

const EmailDialog = ({ showDialog, onClose }: { showDialog: boolean; onClose: () => void }) => {
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
          <div className={styles.wrapper1}>
            <Dialog.Title className={styles.DialogTitle}>이메일 수집 및 이용</Dialog.Title>
          </div>
          <Dialog.Description className={styles.DialogDescription}>
            {`결심편지 발송을 위해 이메일을\n수집하고자 합니다.\n\n수집된 이메일은 본인이 쓴 작심편지 발송 외 다른 목적으로 이용되지 않으며,
                서비스 종료 혹은 회원님이 탈퇴할 경우\n즉시 파기됩니다.`}
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default EmailDialog
