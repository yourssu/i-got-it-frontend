import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'

import { getLetters } from '@/API/resolution/getLetters'
import { lettersLockedState } from '@/State/lettersLockedState'
import { GetLetterResponse } from '@/Types/letter'

export const useGetLetters = (resolutionId: string, userId: number) => {
  const [, setLettersLockedState] = useRecoilState(lettersLockedState)
  return useQuery<GetLetterResponse>(
    ['getLetters', resolutionId, userId],
    () => getLetters(resolutionId, userId),
    {
      enabled: true,
      onSuccess: (data) => {
        setLettersLockedState(data.isLocked)
        console.log('success-get-letters')
      },
    }
  )
}
