import React, { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import './EmailDialog.scss'

const EmailDialog = ({
  showDialog,
  onSubmit,
}: {
  showDialog: boolean
  onSubmit: (email?: string) => void
}) => {
  const [email, setEmail] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(email)
  }

  const handleReject = () => {
    onSubmit()
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
          <form onSubmit={handleSubmit}>
            <fieldset className="Fieldset">
              <input
                className="Input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="soongsill@ssu.ac.kr"
              />
            </fieldset>
            <div className="wapper-dialog-botton">
              <button
                type="button"
                onClick={handleReject}
                className="dialog-button"
              >
                갠.찬아.요
              </button>
              <button
                type="submit"
                className="dialog-button"
              >
                완료
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default EmailDialog
