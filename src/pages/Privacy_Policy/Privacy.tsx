import React from 'react'

import { useNavigate } from 'react-router-dom'

import styles from './Privacy.module.scss'

const Privacy = () => {
  const navigate = useNavigate()

  const onClickClose = () => {
    navigate(-1)
  }

  return (
    <div>
      <button
        className={styles.closeButton}
        onClick={onClickClose}
      />
      <div className={styles.title}>개인정보 처리방침</div>
    </div>
  )
}

export default Privacy
