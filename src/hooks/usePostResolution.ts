import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { postResolution } from '@/API/resolution/postResolution'
import { resolutionIdState, resolutionState } from '@/State/resolutionState'

export const usePostResolution = () => {
  const navigate = useNavigate()
  const [, setResolutionIdState] = useRecoilState(resolutionIdState)
  const [, setResolutionRecoilState] = useRecoilState(resolutionState)

  return useMutation(postResolution, {
    onSuccess: (res) => {
      setResolutionIdState(res.data.resolutionId)
      console.log('success-post-resolution')
      setResolutionRecoilState('')
      navigate(`/resolutions/${res.data.resolutionId}`)
      localStorage.removeItem('resolution')
      localStorage.removeItem('letter')
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
