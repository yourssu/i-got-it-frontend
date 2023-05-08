import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { resolutionIdState } from '@/State/resolutionState'
import { userIdState } from '@/State/userIdState'
import BoxButton from '@/components/Button/BoxButton/BoxButton'
import MenuHeader from '@/components/Header/MenuHeader'
import { usePostRefresh } from '@/hooks/usePostRefresh'
import MenuContent from '@/pages/MenuContent/MenuContent'
import TokenService from '@/services/TokenService'

import './Home.scss'

const Home = () => {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(false)
  const resolutionId = useRecoilValue(resolutionIdState)
  const userId = useRecoilValue(userIdState)
  const { mutate: postRefresh } = usePostRefresh()

  const onClickMenu = () => {
    setOpenMenu((openMenu) => !openMenu)
  }

  const onClick = () => {
    navigate('/create')
  }

  useEffect(() => {
    if (userId === -1 || TokenService.get() === undefined) {
      navigate('/login')
    } else if (userId !== -1 && TokenService.get() !== undefined) {
      postRefresh()
      if (resolutionId !== '' && resolutionId !== undefined) {
        navigate(`/resolutions/${resolutionId}`)
      }
    }
  }, [])

  return (
    <>
      <MenuContent
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <MenuHeader
        onClickMenu={onClickMenu}
        isDotMenuShow={false}
        openDotMenu={false}
      />
      <div className="home-wrapper">
        <div className="home-meta">
          <div className="home-title">아가릿!</div>
          <div className="home-description">{`말로만 다짐하는 사람들을 위한 
      본격 공개 처형 프로젝트`}</div>
        </div>
        <div className="recommend"> ↘ 아가리에 다짐을 외쳐보세요 ↙ </div>
      </div>
      <BoxButton
        type="button"
        text="결심하기"
        onClick={onClick}
      />
    </>
  )
}

export default Home
