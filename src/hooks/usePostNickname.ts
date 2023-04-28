import { useMutation } from 'react-query'
import { postNickname } from '../API/postNickname'
import { useRecoilState } from 'recoil'
import { nicknameState } from '../State/nicknameState'
import { useNavigate } from 'react-router-dom'

export const usePostNickname = () => {
  const [, setNicknameState] = useRecoilState(nicknameState)
  const navigate = useNavigate()
  return useMutation(postNickname, {
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
