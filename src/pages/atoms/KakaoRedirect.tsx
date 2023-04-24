import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { usePostCode } from '../../hooks/usePostCode'

const KakaoRedirect = () => {
  const { mutate: postCode } = usePostCode()
  const params = new URL(document.location.toString()).searchParams
  useEffect(() => {
    //postCode(params.get('code')!)
    console.log(params.get('code'))
  }, [])

  // 기존 사용자인지 신규 사용자인지 구분 후 페이지 이동 로직 추가해야함.
  return <Navigate to="/" />
}

export default KakaoRedirect
