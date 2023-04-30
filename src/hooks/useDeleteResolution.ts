import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { deleteResolution } from '@/API/resolution/deleteResolution'

export const useDeleteResolution = () => {
  const navigate = useNavigate()
  return useMutation(deleteResolution, {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onMutate() {},
    onSuccess: () => {
      console.log('success-delete-resolution')
      navigate('/')
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
