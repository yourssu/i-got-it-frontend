import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { deleteLetters } from '@/API/resolution/deleteLetters'
import { ErrorType } from '@/Types/error'

export const useDeleteLetters = () => {
  const navigate = useNavigate()
  return useMutation(deleteLetters, {
    onSuccess: () => {},
    onError: (err: ErrorType) => {
      if (err.response.status === 401) {
        navigate('/login')
      }
    },
  })
}
