import { GetLetterResponse } from '@/Types/letter'
import api from '../api'

export const getLetters = async (
  resolutionId: number,
  userId: number
): Promise<GetLetterResponse> => {
  const data = await api({
    method: 'get',
    url: `/api/v1/resolutions/${resolutionId}/letters${userId !== -1 ? `?userId=${userId}` : ''}`,
  })

  return data.data
}
