import BoxButton from '../../components/Button/BoxButton'
import Header from '../../components/Header/Header'
import './Create.scss'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()
  const onClickBack = () => {
    navigate('/')
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    navigate('/create-letter')

    console.log(event.target)
    console.log('결심 제출 완료')
  }

  return (
    <>
      <Header onClick={onClickBack} />
      <form
        className="create-form"
        onSubmit={handleSubmit}
      >
        <label className="title">기간</label>
        <div className="description">선택한 기간 경과 시 뱉은 말을 돌려드립니다.</div>
        <div className="wapper-date-button">
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
          <input
            type="radio"
            className="button-date"
            name="date"
            id="date30"
          />
          <label
            htmlFor="date30"
            className="button-date"
          >
            작심 30일
          </label>
        </div>
        <label className="title">결심</label>
        <div className="description">결심은 공개되어서 남들에게 보여요!</div>
        <div className="input-wrapper">
          <textarea
            className="create-input"
            placeholder="가나다가나다가나다가나다가나다가나다가나다가나다가나다가나다"
            required
            rows={2}
            cols={40}
            maxLength={33}
          />
          <button
            type="button"
            className="clear-button"
          />
        </div>
        <BoxButton
          type="submit"
          text="다음"
        />
      </form>
    </>
  )
}

export default Create
