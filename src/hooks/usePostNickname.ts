import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { postNickname } from '@/API/Nickname/postNickname'
import { nicknameState } from '@/State/nicknameState'

export const usePostNickname = () => {
  const [, setNicknameState] = useRecoilState(nicknameState)
  const navigate = useNavigate()
  return useMutation(postNickname, {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onMutate() {},
    onSuccess: () => {
      console.log('success')
      navigate('/')
    },
    onError: (err) => {
      setNicknameState('')
      console.log(err)
    },
  })
}
