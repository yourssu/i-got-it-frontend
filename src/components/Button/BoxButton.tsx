import './boxButton.scss'

interface Iprops {
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}

const BoxButton = (props: Iprops) => {
  const { text, type, onClick } = props
  return (
    <div>
      <button
        className="box-button"
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </div>
  )
}

export default BoxButton
