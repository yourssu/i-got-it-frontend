import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { postResolution } from '@/API/resolution/postResolution'
import { resolutionIdState } from '@/State/resolutionState'

export const usePostResolution = () => {
  const navigate = useNavigate()
  const [, setResolutionIdState] = useRecoilState(resolutionIdState)

  return useMutation(postResolution, {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onMutate() {},
    onSuccess: (res) => {
      setResolutionIdState(res.data.resolutionUniqueId)
      console.log('success')
      console.log(res)
      navigate(`/resolutions/${res.data.resolutionUniqueId}`)
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
