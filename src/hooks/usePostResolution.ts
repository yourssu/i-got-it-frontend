import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { postResolution } from '@/API/resolution/postResolution'
import { letterState } from '@/State/letterState'
import {
  resolutionIdState,
  resolutionIsExistedState,
  resolutionState,
} from '@/State/resolutionState'

export const usePostResolution = () => {
  const navigate = useNavigate()
  const [, setResolutionIdState] = useRecoilState(resolutionIdState)
  const [, setResolutionIsExistedState] = useRecoilState(resolutionIsExistedState)
  const [, setResolutionRecoilState] = useRecoilState(resolutionState)
  const [, setLetterState] = useRecoilState(letterState)

  return useMutation(postResolution, {
    onSuccess: (res) => {
      setResolutionIdState(res.data.resolutionId)
      console.log('success-post-resolution')
      setResolutionRecoilState('')
      setLetterState('')
      setResolutionIsExistedState(res.data.isExisted)
      navigate(`/resolutions/${res.data.resolutionId}`)
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
