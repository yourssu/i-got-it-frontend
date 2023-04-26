import { useMutation } from 'react-query'
import { postCode } from '../API/postCode'
import { useNavigate } from 'react-router-dom'

export const usePostCode = () => {
  const navigate = useNavigate()
  return useMutation(postCode, {
    onMutate() {},
    onSuccess: (data) => {
      if (data.newUser) {
        navigate('/nickname')
      }
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
