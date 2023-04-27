import { Cookies } from 'react-cookie'
import client from './client'
import { GetLetterResponse } from '../Types/letter'

const cookies = new Cookies()

export const getLetters = async (
  resolutionId: string,
  userId: string | null
): Promise<GetLetterResponse> => {
  const data = await client.get(
    `resolutions/${resolutionId}/letters${userId !== null ? `?userId=${userId}` : ''}`,
    {
      headers: {
        Authorization: `Bearer ${cookies.get('accessToken')}`,
      },
    }
  )

  return data.data
}
