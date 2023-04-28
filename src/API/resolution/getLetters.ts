import { GetLetterResponse } from '../../Types/letter'
import api from '../api'

export const getLetters = async (
  resolutionId: string,
  userId: string | null
): Promise<GetLetterResponse> => {
  const data = await api({
    method: 'get',
    url: `/api/v1/resolution/${resolutionId}/letters${userId !== null ? `?userId=${userId}` : ''}`,
  })

  return data.data
}
