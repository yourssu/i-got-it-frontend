import MenuHeader from '../../components/Header/MenuHeader'
import './Mypage.scss'

const onClickMenu = () => {}

const MyPage = () => {
  return (
    <>
      <MenuHeader onClick={onClickMenu} />
      <div className="yellow-star">
        <div className="nickname-resolution">청소기의 “외침”</div>
        <div className="resolution-line" />
        <div
          className="resolution-line"
          id="resolution-line2"
        />
        <div className="resolution">
          결심들어가는곳 결심들어가는곳 결심들어가는곳 결심들어가는곳💨💨💨
        </div>
      </div>
    </>
  )
}

export default MyPage
