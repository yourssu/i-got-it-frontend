import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { usePostCode } from '../../hooks/usePostCode'

/* url을 통해서 인가코드 확인 가능 -> 인가코드로 토큰 받기 */
const KakaoRedirect = () => {
  const { mutate: postCode } = usePostCode()
  const params = new URL(document.location.toString()).searchParams
  useEffect(() => {
    postCode(params.get('code')!)
  }, [])

  return <Navigate to="/" />
}

export default KakaoRedirect
