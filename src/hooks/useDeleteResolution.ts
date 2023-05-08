import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { deleteResolution } from '@/API/resolution/deleteResolution'

export const useDeleteResolution = () => {
  const navigate = useNavigate()
  return useMutation(deleteResolution, {
    onSuccess: () => {
      navigate('/')
    },
    onError: (err: any) => {
      if (err.response.status === 401) {
        navigate('/login')
      }
    },
  })
}
