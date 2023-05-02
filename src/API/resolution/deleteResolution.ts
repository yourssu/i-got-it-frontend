import api from '../api'

export const deleteResolution = async (resolutionId: string) => {
  return await api({
    method: 'delete',
    url: `/api/v1/resolutions/${resolutionId}`,
  })
}