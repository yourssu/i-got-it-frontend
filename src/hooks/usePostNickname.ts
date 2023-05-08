import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { postNickname } from '@/API/Nickname/postNickname'
import { nicknameState } from '@/State/nicknameState'

export const usePostNickname = () => {
  const [, setNicknameState] = useRecoilState(nicknameState)
  const navigate = useNavigate()
  return useMutation(postNickname, {
    onSuccess: () => {
      navigate('/')
    },
    onError: (err: any) => {
      setNicknameState('')
      if (err.response.status === 401) {
        navigate('/login')
      }
    },
  })
}
