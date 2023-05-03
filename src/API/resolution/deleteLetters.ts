import TokenService from '@/services/TokenService'

import api from '../api'

interface IDeleteLetters {
  resolutionId: string
  letterId: number
}

export const deleteLetters = async ({ resolutionId, letterId }: IDeleteLetters) => {
  return await api({
    method: 'delete',
    url: `/api/v1/resolutions/${resolutionId}/letters/${letterId}`,
    headers: TokenService.headers,
  })
}
