import { useMutation } from 'react-query'
import { postResolution } from '../API/resolution/postResolution'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { resolutionIdState } from './../State/resolutionState'

export const usePostResolution = () => {
  const navigate = useNavigate()
  const [, setResolutionIdState] = useRecoilState(resolutionIdState)

  return useMutation(postResolution, {
    onMutate() {},
    onSuccess: (data) => {
      setResolutionIdState(data.resolutionId)
      console.log('success')
      navigate('/mypage')
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
