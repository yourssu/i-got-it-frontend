import { useMutation } from 'react-query'
import { postResolution } from '../API/resolution/postResolution'

export const usePostResolution = () => {
  return useMutation(postResolution, {
    onMutate() {},
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
