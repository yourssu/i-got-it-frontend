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

  return <Navigate to="/" />
}

export default KakaoRedirect
