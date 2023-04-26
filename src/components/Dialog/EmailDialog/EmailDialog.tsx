import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import './EmailDialog.scss'

const EmailDialog = ({
  showDialog,
  onConfirm,
  onReject,
}: {
  showDialog: boolean
  onConfirm: (email: string) => void
  onReject: () => void
}) => {
  const [email, setEmail] = useState('')

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleConfirm = () => {
    onConfirm(email)
  }

  return (
    <Dialog.Root open={showDialog}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">작심편지를 메일로 보내드려요</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            {`정.확.한. 메일 주소를 입력하신다면요.
            메일 주소를 입력해 주세요.`}
          </Dialog.Description>
          <fieldset className="Fieldset">
            <input
              className="Input"
              id="name"
              defaultValue="Pedro Duarte"
              value={email}
              onChange={handleChangeInput}
              placeholder="soongsill@ssu.ac.kr"
            />
          </fieldset>
          <div className="wapper-dialog-botton">
            <button
              onClick={onReject}
              className="dialog-button"
            >
              갠.찬아.요
            </button>
            <button
              onClick={handleConfirm}
              className="dialog-button"
            >
              완료
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default EmailDialog
