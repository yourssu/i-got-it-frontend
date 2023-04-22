import React from 'react'

declare global {
  interface Window {
    Kakao: any
  }
}

const Login = () => {
  if(!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY)
  }

  const kakaoLogin = () => {
    const redirectUri = `${window.location.origin}/callback/kakaotalk`
    window.Kakao.Auth.authorize({ redirectUri })
  }

  return (
    <div>
      <div>아가리에 다짐을 외치면, N일 후 뱉은 말을 돌려드려요.</div>
      <div>말로만 다짐하는 사람들을 위한 본격 공개 처형 프로젝트</div>
      <div>현재까지 00명이 아가리에 외쳤어요!</div>
      <button type="button" onClick={kakaoLogin}>
        <span>카카오 로그인</span>
      </button>
      <div>로그인 시 서비스 이용약관에 동의하게 됩니다.</div>
    </div>
  )
}

export default Login