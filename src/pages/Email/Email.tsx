import React, { useState } from 'react'

import { useNavigate } from 'react-router'
import { useRecoilState, useRecoilValue } from 'recoil'

import { letterState } from '@/State/letterState'
import { resolutionState } from '@/State/resolutionState'
import BoxButton from '@/components/Button/BoxButton/BoxButton'
import BackHeader from '@/components/Header/BackHeader'
import { usePostResolution } from '@/hooks/usePostResolution'

import styles from './Email.module.scss'

const Email = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [letter] = useRecoilState(letterState)
  const resolutionValue = useRecoilValue(resolutionState)
  const { mutate: postResolution } = usePostResolution()

  const handlePostResolution = (email?: string) => {
    postResolution({
      period: 21,
      content: resolutionValue,
      letter: letter,
      mail: email,
    })
  }

  const handleSubmit = () => {
    handlePostResolution(email)
  }

  const onClickBack = () => {
    navigate('/create-letter')
  }

  return (
    <>
      <BackHeader onClick={onClickBack} />
      <form
        className={styles.emailForm}
        onSubmit={handleSubmit}
      >
        <div className={styles.emailTitle}>{'편지는 3주 후\n메일로 발송됩니다!'}</div>
        <div className={styles.inputTitle}>메일 주소를 입력하세요.</div>
        <fieldset className={styles.emailFieldset}>
          <input
            className={styles.emailInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="i-got-it@example.com"
            pattern=".+@.+\..+"
          ></input>
        </fieldset>
      </form>
      <div>
        <input
          type="checkbox"
          id="email-check"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="email-check"></label>
        <div className={styles.terms_of_email}>
          {' '}
          <button
            className={styles.link}
            // href="/terms-email"
          >
            이메일 수집 및 이용
          </button>
          에 동의합니다.
        </div>
        <BoxButton
          type="button"
          text="완료"
          isDisabled={!email || !isChecked}
          onClick={handleSubmit}
        />
      </div>
    </>
  )
}

export default Email
