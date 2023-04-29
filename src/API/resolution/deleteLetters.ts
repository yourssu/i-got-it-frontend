import api from '../api'

interface IDeleteLetters {
  resolutionId: number
  letterId: number
}

export const deleteLetters = async ({ resolutionId, letterId }: IDeleteLetters) => {
  return await api({
    method: 'delete',
    url: `/api/v1/resolutions/${resolutionId}/letters/${letterId}`,
  })
}
