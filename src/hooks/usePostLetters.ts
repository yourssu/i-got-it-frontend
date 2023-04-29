import { useMutation } from 'react-query'
import { postLetters } from '@/API/resolution/postLetters'
export const usePostLetters = () => {
  return useMutation(postLetters, {
    onMutate() {},
    onSuccess: (data) => {
      console.log(data)
      console.log('success')
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
