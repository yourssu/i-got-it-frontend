import TokenService from '@/services/TokenService'

import api from '../api'

export const postNickname = async (nickname: string) => {
  const data = await api({
    method: 'post',
    url: '/api/v1/auth/sign-in/info',
    data: {
      nickname,
    },
    headers: TokenService.headers,
  })

  return data.data
}
