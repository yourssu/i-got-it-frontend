import { useMutation } from 'react-query'

import { postRefresh } from '@/API/Login/postRefresh'
import TokenService from '@/services/TokenService'

export const usePostRefresh = () => {
  return useMutation(postRefresh, {
    onSuccess: (data) => {
      TokenService.set(data.accessToken)
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
