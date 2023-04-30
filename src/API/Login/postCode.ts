import { Cookies } from 'react-cookie'

import { PostKakaoLoginResponse } from '@/Types/login'

import api from '../api'

const cookies = new Cookies()
export const postCode = async (code: string): Promise<PostKakaoLoginResponse> => {
  const data = await api({
    method: 'post',
    url: '/api/v1/auth/sign-in/kakao',
    data: {
      code,
    },
  })

  cookies.set('accessToken', data.data.accessToken)
  return data.data
}
