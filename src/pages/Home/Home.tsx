import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.scss'
import BoxButton from '../../components/Button/BoxButton'
import MenuHeader from '../../components/Header/MenuHeader'
import MenuContent from '../MenuContent/MenuContent'
import { useRecoilValue } from 'recoil'
import { resolutionIdState } from '../../State/resolutionState'

const Home = () => {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false)
  const resolutionId = useRecoilValue(resolutionIdState)

  const onClickMenu = () => {
    setOpenMenu((openMenu) => !openMenu)
  }

  const onClick = () => {
    navigate('/create')
  }

  useEffect(() => {
    if (resolutionId !== null) {
      navigate(`/mypage`)
    }
    console.log(resolutionId)
  })

  return (
    <>
      <MenuContent
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <MenuHeader onClick={onClickMenu} />
      <div className="home-wrapper">
        <div className="home-meta">
          <div className="home-title">아가릿!</div>
          <div className="home-description">{`말로만 다짐하는 사람들을 위한 
      본격 공개 처형 프로젝트`}</div>
        </div>
        <div className="recommend"> ↘ 아가리에 다짐을 외쳐보세요 ↙ </div>
        <BoxButton
          type="button"
          text="결심하기"
          onClick={onClick}
        />
      </div>
    </>
  )
}

export default Home
