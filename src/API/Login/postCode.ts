import { PostKakaoLoginResponse } from '@/Types/login'
import TokenService from '@/services/TokenService'

import api from '../api'

export const postCode = async (code: string): Promise<PostKakaoLoginResponse> => {
  const data = await api({
    method: 'post',
    url: '/api/v1/auth/sign-in/kakao',
    data: {
      code,
    },
  })

  TokenService.set(data.data.accessToken)

  return data.data
}
