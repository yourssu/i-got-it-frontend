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
    <Toast.Root
      className="ToastRoot"
      open={open}
      onOpenChange={setOpen}
      // duration={100000000}  // 테스트용 코드
    >
      <Toast.Title className="ToastTitle">{title}</Toast.Title>
    </Toast.Root>
  )
}

export default ToastDemo
