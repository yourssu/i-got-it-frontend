import { useMutation } from 'react-query'
import { postResolution } from '../API/resolution/postResolution'
import { useNavigate } from 'react-router-dom'

export const usePostResolution = () => {
  const navigate = useNavigate()
  return useMutation(postResolution, {
    onMutate() {},
    onSuccess: (data) => {
      console.log('success')
      navigate('/mypage')
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
