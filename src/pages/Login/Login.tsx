import React from 'react'
import speech_bubble from '../../images/speech_bubble.svg'
import kakao_symbol from '../../images/kakao_symbol.svg'
import '../Login/Login.scss'

declare global {
  interface Window {
    Kakao: any
  }
}

const Login = () => {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY)
  }

  const kakaoLogin = () => {
    const redirectUri = `${window.location.origin}/callback/kakaotalk`
    window.Kakao.Auth.authorize({ redirectUri })
  }

  return (
    <div>
      <div className="title-description-bubble">
        <img
          className="bubble"
          src={speech_bubble}
          alt={speech_bubble}
        />
        <div className="title-description">
          <span>아가리에 다짐을 외치면,</span>
          <span>N일 후 뱉은 말을 돌려드려요.</span>
        </div>
      </div>
      <div className="home-title">아가릿!</div>
      <div className="home-description">{`말로만 다짐하는 사람들을 위한 
      본격 공개 처형 프로젝트`}</div>
      <div className="count-users">현재까지 00명이 아가리에 외쳤어요!</div>
      <button
        className="kakao-button"
        type="button"
        onClick={kakaoLogin}
      >
        <img
          className="kakao-logo"
          src={kakao_symbol}
          alt="kakao_symbol"
        />
        <span>카카오 로그인</span>
      </button>
      <div className="terms-of-service">로그인 시 서비스 이용약관에 동의하게 됩니다.</div>
    </div>
  )
}

export default Login
