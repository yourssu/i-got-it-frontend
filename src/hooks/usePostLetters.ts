import { useMutation } from 'react-query'
import { postLetters } from '../API/resolution/postLetters'
export const usePostLetters = () => {
  return useMutation(postLetters, {
    onMutate() {},
    onSuccess: () => {
      console.log('success')
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
