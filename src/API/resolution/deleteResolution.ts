import api from '../api'

export const deleteResolution = async (resolutionId: number) => {
  return await api({
    method: 'delete',
    url: `/api/v1/resolutions/${resolutionId}`,
  })
}
