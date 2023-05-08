import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { deleteResolution } from '@/API/resolution/deleteResolution'
import { ErrorType } from '@/Types/error'

export const useDeleteResolution = () => {
  const navigate = useNavigate()
  return useMutation(deleteResolution, {
    onSuccess: () => {
      navigate('/')
    },
    onError: (err: ErrorType) => {
      if (err.response.status === 401) {
        navigate('/login')
      }
    },
  })
}
