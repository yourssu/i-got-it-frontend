import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { getLetters } from '@/API/resolution/getLetters'
import { GetLetterResponse } from '@/Types/letter'
import { lettersLockedState } from '@/State/lettersLockedState'

export const useGetLetters = (resolutionId: number, userId: number) => {
  const [, setLettersLockedState] = useRecoilState(lettersLockedState)
  return useQuery<GetLetterResponse>(
    ['getLetters', resolutionId, userId],
    () => getLetters(resolutionId, userId),
    {
      enabled: true,
      onSuccess: (data) => {
        setLettersLockedState(data.isLocked)
        console.log(data)
        console.log('success')
      },
    }
  )
}
