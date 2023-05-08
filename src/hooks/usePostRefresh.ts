import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { postRefresh } from '@/API/Login/postRefresh'
import TokenService from '@/services/TokenService'

export const usePostRefresh = () => {
  const navigate = useNavigate()
  return useMutation(postRefresh, {
    onSuccess: (data) => {
      TokenService.set(data.accessToken)
    },
    onError: (err: any) => {
      if (err.response.status === 401) {
        navigate('/login')
      }
    },
  })
}
