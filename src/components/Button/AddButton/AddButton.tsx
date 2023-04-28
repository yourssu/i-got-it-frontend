import Bubble from '../../../images/Cheer/comment_bubble.svg'
import AddIcon from '../../../images/Cheer/add_icon.svg'
import './addButton.scss'

const AddButton = () => {
  const onClick = () => {
    // 다이얼로그 띄우기
  }
  return (
    <div className="add-button">
      <img
        className="add-button-icon"
        src={AddIcon}
        alt={AddIcon}
      />
      <img
        src={Bubble}
        alt={Bubble}
      />
    </div>
  )
}

export default AddButton
