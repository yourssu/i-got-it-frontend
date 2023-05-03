import { PostLetterResponse } from '@/Types/letter'
import TokenService from '@/services/TokenService'

import api from '../api'

export const postLetters = async (params: {
  resolutionId: string
  nickname: string
  content: string
}): Promise<PostLetterResponse> => {
  const { resolutionId, nickname, content } = params
  const data = await api({
    method: 'post',
    url: `/api/v1/resolutions/${resolutionId}/letters`,
    data: {
      nickname,
      content,
    },
    headers: {
      Authorization: `Bearer ${TokenService.get()}`,
    },
  })

  return data.data
}
