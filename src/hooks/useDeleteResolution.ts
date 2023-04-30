import { deleteResolution } from '@/API/resolution/deleteResolution'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

export const useDeleteResolution = () => {
  const navigate = useNavigate()
  return useMutation(deleteResolution, {
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
