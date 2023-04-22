import './boxButton.scss'

interface Iprops {
  onClick?: () => void
}

const BoxButton = (props: Iprops) => {
  const { onClick } = props
  return (
    <div>
      <button onClick={onClick}>결심하기</button>
    </div>
  )
}

export default BoxButton
