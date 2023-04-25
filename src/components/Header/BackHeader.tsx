import './BackHeader.scss'

interface Iprops {
  onClick?: () => void
}

const BackHeader = (props: Iprops) => {
  const { onClick } = props
  return (
    <header className="header">
      <button
        type="button"
        className="back-button"
        onClick={onClick}
      />
    </header>
  )
}

export default BackHeader
