import TokenService from '@/services/TokenService'

import api from '../api'

export const deleteWithdraw = async () => {
  return await api({
    method: 'delete',
    url: '/api/v1/auth/withdraw',
    headers: TokenService.headers,
  })
}
