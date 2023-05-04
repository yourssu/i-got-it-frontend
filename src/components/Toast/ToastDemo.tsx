import React from 'react'

import './ToastDemo.scss'

import * as Toast from '@radix-ui/react-toast'

interface Iprop {
  title: string
  open: boolean
  setOpen: (open: boolean) => void
}

const ToastDemo = ({ title, open, setOpen }: Iprop) => {
  return (
    <Toast.Provider duration={1500}>
      <Toast.Root
        className="ToastRoot"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="ToastTitle">{title}</Toast.Title>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  )
}

export default ToastDemo
