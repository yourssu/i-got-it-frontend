import { useQuery } from 'react-query'

import { getCount } from '@/API/Count/getCount'
import { IGetCountResponse } from '@/Types/count'

export const useGetCount = () => {
  return useQuery<IGetCountResponse>('getCount', () => getCount(), {
    enabled: true,
    onSuccess: () => {},
  })
}
