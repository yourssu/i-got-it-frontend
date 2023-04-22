import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <div>
      <div className="home-title">아가릿!</div>
      <div className="home-description">{`말로만 다짐하는 사람들을 위한 
      본격 공개 처형 프로젝트`}</div>
      <div className="recommend"> ↘ 아가리에 다짐을 외쳐보세요 ↙ </div>
    </div>
  )
}

export default Home
