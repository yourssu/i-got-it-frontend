import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { getResolution } from '@/API/resolution/getResolution'
import { IGetResolutionResponse } from '@/Types/resolution'

export const useGetResolution = (resolutionId: number) => {
  const navigate = useNavigate()
  return useQuery<IGetResolutionResponse>(
    ['getResolution', resolutionId],
    () => getResolution(resolutionId),
    {
      enabled: true,
      onSuccess: (res) => {
        console.log(res)
        console.log('success')
      },
      onError: () => {
        navigate('/delete')
      },
    }
  )
}
