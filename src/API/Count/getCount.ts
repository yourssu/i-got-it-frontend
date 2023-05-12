import { IGetCountResponse } from '@/Types/count'

import api from '../api'

export const getCount = async (): Promise<IGetCountResponse> => {
  return await api({
    method: 'get',
    url: 'api/v1/resolutions/history/count',
  })
}
