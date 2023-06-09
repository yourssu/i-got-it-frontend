import { useQuery } from 'react-query'

import { getResolution } from '@/API/resolution/getResolution'
import { IGetResolutionResponse } from '@/Types/resolution'

export const useGetResolution = (resolutionId: string) => {
  return useQuery<IGetResolutionResponse>(
    ['getResolution', resolutionId],
    () => getResolution(resolutionId),
    {
      enabled: true,
      onSuccess: () => {},
    }
  )
}
