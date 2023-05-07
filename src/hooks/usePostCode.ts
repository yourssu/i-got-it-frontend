import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { postCode } from '@/API/Login/postCode'
import { nicknameState } from '@/State/nicknameState'
import { resolutionIdState } from '@/State/resolutionState'
import { userIdState } from '@/State/userIdState'

export const usePostCode = () => {
  const navigate = useNavigate()
  const [, setUserId] = useRecoilState(userIdState)
  const [, setNickname] = useRecoilState(nicknameState)
  const [, setResolutionId] = useRecoilState(resolutionIdState)

  return useMutation(postCode, {
    onSuccess: (data) => {
      setUserId(data.userId)
      if (data.nickname === null) {
        navigate('/nickname')
      } else {
        setNickname(data.nickname)
        navigate('/')
      }
      if (data.resolutionId !== null) {
        setResolutionId(data.resolutionId)
      }
    },
    onError: (err) => {},
  })
}
