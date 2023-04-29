import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

import { resolutionState } from '@/State/resolutionState'
import BoxButton from '@/components/Button/BoxButton/BoxButton'
import BackHeader from '@/components/Header/BackHeader'

import './Create.scss'

const Create = () => {
  const navigate = useNavigate()
  const [resolution, setLesolution] = useState('')
  const [inputCount, setInputCount] = useState(0)
  const setResolutionRecoilState = useSetRecoilState(resolutionState)

  const onClickBack = () => {
    navigate('/')
  }

  const handleSubmit = () => {
    setResolutionRecoilState(resolution)
    navigate('/create-letter')
  }

  const onClickClear = () => {
    setLesolution('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLesolution(event.target.value)
    setInputCount(event.target.value.length)
  }

  return (
    <>
      <BackHeader onClick={onClickBack} />
      <form className="create-form">
        <label className="title">기간</label>
        <div className="description">선택한 기간 경과 시 뱉은 말을 돌려드립니다.</div>
        <div className="wrapper-date-button">
          <input
            type="radio"
            name="date"
            id="date3"
            defaultChecked
          />
          <label
            htmlFor="date3"
            className="button-date"
          >
            작심 3일
          </label>
        </div>
        <label className="title">결심</label>
        <div className="description">결심은 공개되어서 남들에게 보여요!</div>
        <div className="input-wrapper">
          <textarea
            className="create-input"
            placeholder="중간고사의 수치...!!! 기말고사로 만회하자!"
            required
            rows={2}
            cols={40}
            maxLength={33}
            value={resolution}
            onChange={handleChange}
            onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength)
            }}
          />
          <button
            type="button"
            className="clear-button"
            onClick={onClickClear}
          />
          <span className="resolutioin-text-count">{inputCount} / 33</span>
        </div>
      </form>
      <BoxButton
        type="submit"
        text="다음"
        onClick={handleSubmit}
      />
    </>
  )
}

export default Create
