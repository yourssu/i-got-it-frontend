import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { postResolution } from '@/API/resolution/postResolution'
import { resolutionIdState } from '@/State/resolutionState'

export const usePostResolution = () => {
  const navigate = useNavigate()
  const [, setResolutionIdState] = useRecoilState(resolutionIdState)

  return useMutation(postResolution, {
    onSuccess: (res) => {
      setResolutionIdState(res.data.resolutionId)
      console.log('success-post-resolution')
      navigate(`/resolutions/${res.data.resolutionId}`)
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
