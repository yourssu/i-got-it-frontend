import { IpostResolutionResponse } from '@/Types/resolution'
import TokenService from '@/services/TokenService'

import api from '../api'

interface IPostResolution {
  period: 3 | 30
  content: string
  letter: string
  mail?: string
}

export const postResolution = async ({
  period,
  content,
  letter,
  mail,
}: IPostResolution): Promise<IpostResolutionResponse> => {
  return await api({
    method: 'post',
    url: '/api/v1/resolutions',
    data: {
      period,
      content,
      letter,
      mail,
    },
    headers: {
      Authorization: `Bearer ${TokenService.get()}`,
    },
  })
}
