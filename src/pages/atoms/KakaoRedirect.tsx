import React, { useEffect } from 'react'
import { usePostCode } from '../../hooks/usePostCode'

const KakaoRedirect = () => {
  const { mutate: postCode } = usePostCode()
  const params = new URL(document.location.toString()).searchParams
  useEffect(() => {
    postCode(params.get('code')!)
  }, [])

  return null
}

export default KakaoRedirect
