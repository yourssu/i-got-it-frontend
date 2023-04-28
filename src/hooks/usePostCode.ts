import { useMutation } from 'react-query'
import { postCode } from '../API/Login/postCode'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { nicknameState } from '../State/nicknameState'
import { userIdState } from '../State/userIdState'

export const usePostCode = () => {
  const navigate = useNavigate()
  const [, setUserId] = useRecoilState(userIdState)
  const [, setNickname] = useRecoilState(nicknameState)
  return useMutation(postCode, {
    onMutate() {},
    onSuccess: (data) => {
      setUserId(data.userId)
      if (data.isNewUser) {
        navigate('/nickname')
      } else {
        setNickname(data.nickname)
        navigate('/mypage')
      }
      console.log(data) // console.log는 추후에 삭제할 예정
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
