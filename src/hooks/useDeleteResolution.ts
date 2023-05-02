import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { deleteResolution } from '@/API/resolution/deleteResolution'
import { resolutionState } from '@/State/resolutionState'

export const useDeleteResolution = () => {
  const navigate = useNavigate()
  const [, setResolutionRecoilState] = useRecoilState(resolutionState)
  return useMutation(deleteResolution, {
    onSuccess: () => {
      console.log('success-delete-resolution')
      setResolutionRecoilState('')
      navigate('/')
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
