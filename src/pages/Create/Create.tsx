import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { resolutionState } from '@/State/resolutionState'
import BoxButton from '@/components/Button/BoxButton/BoxButton'
import BackHeader from '@/components/Header/BackHeader'

import './Create.scss'

const Create = () => {
  const navigate = useNavigate()
  const [resolution, setResolution] = useRecoilState(resolutionState)

  const onClickBack = () => {
    navigate('/')
  }

  const handleSubmit = () => {
    setResolution(resolution)
    navigate('/create-letter')
  }

  const onClickClear = () => {
    setResolution('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResolution(event.target.value)
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
            작심 3주
          </label>
        </div>
        <label className="title">결심</label>
        <div className="description">
          <span>결심은 공개되어서 남들에게 보여요!</span>
          <span>결심 내용은 이후 수정이 불가하니 신중히 정해주세요!</span>
        </div>
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
          <span className="resolutioin-text-count">{resolution.length} / 33</span>
        </div>
      </form>
      <BoxButton
        type="submit"
        text="다음"
        isDisabled={!resolution}
        onClick={handleSubmit}
      />
    </>
  )
}

export default Create
