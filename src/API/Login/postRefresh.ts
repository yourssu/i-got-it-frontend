import { PostRefreshResponse } from '@/Types/login'

import api from '../api'

export const postRefresh = async (): Promise<PostRefreshResponse> => {
  const data = await api({
    method: 'post',
    url: '/api/v1/auth/token/refresh',
  })

  return data.data
}
