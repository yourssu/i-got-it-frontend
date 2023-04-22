import './BoxButton.scss'

interface Iprops {
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  isDisabled?: true
}

const BoxButton = (props: Iprops) => {
  const { text, type, onClick, isDisabled } = props
  return (
    <div>
      <button
        className="box-button"
        onClick={onClick}
        type={type}
        disabled={isDisabled}
      >
        {text}
      </button>
    </div>
  )
}

export default BoxButton
