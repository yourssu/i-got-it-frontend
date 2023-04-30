import { useMutation } from 'react-query'

import { postLetters } from '@/API/resolution/postLetters'
export const usePostLetters = () => {
  return useMutation(postLetters, {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
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
