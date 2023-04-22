import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import BoxButton from '../../components/Button/BoxButton'
import Letter from '../../images/letter'

const CreateLetter = () => {
  const navigate = useNavigate()
  const onCickBack = () => {
    navigate('/create')
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    navigate('')
  }

  return (
    <>
      <Header onClick={onCickBack} />
      <div>결심한 나에게 편지쓰기</div>
      <div>내가 쓴 편지는 오직 미래의 나만 볼 수 있어요.</div>
      <form
        className="create-letter-form"
        onSubmit={handleSubmit}
      >
        <Letter />
        <input
          type="text"
          placeholder="나에게 전하는 한마디를 입력하세요."
          required
          maxLength={133}
        />
        <BoxButton
          type="submit"
          text="작성 완료"
        />
      </form>
    </>
  )
}

export default CreateLetter
