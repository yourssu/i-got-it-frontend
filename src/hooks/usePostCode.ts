import { useMutation } from 'react-query'
import { postCode } from '../API/postCode'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { nicknameState } from '../State/nicknameState'
import { resolutionIdState } from '../State/resolutionState'

export const usePostCode = () => {
  const navigate = useNavigate()
  const [, setNickname] = useRecoilState(nicknameState)
  const [, setResolutionId] = useRecoilState(resolutionIdState)

  return useMutation(postCode, {
    onMutate() {},
    onSuccess: (data) => {
      if (data.nickname === null) {
        navigate('/nickname')
      } else {
        setNickname(data.nickname)
        navigate('/')
      }
      setResolutionId(data.resolutionId)
      console.log(data) // console.log는 추후에 삭제할 예정
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
