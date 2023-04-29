import { IGetResolutionResponse } from '@/Types/resolution'
import api from '../api'

export const getResolution = async (resolutionId: number): Promise<IGetResolutionResponse> => {
  return await api({
    method: 'get',
    url: `api/v1/resolutions/${resolutionId}`,
  })
}
