import { PostLetterResponse } from '@/Types/letter'

import api from '../api'

export const postLetters = async (params: {
  resolutionId: number
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
  })

  return data.data
}
