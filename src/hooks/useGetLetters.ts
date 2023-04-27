import { useMutation, useQuery } from 'react-query'
import { postCode } from '../API/postCode'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { nicknameState } from '../State/nicknameState'
import { getLetters } from '../API/getLetters'
import { GetLetterResponse } from '../Types/letter'
import { lettersLockedState } from '../State/lettersLockedState'

export const useGetLetters = (resolutionId: string, userId: string | null) => {
  const [, setLettersLockedState] = useRecoilState(lettersLockedState)
  return useQuery<GetLetterResponse>(
    ['getLetters', resolutionId, userId],
    () => getLetters(resolutionId, userId),
    {
      enabled: true,
      onSuccess: (data) => {
        setLettersLockedState(data.locked)
        console.log('success')
      },
    }
  )
}
