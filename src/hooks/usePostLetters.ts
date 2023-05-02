import { useMutation } from 'react-query'

import { postLetters } from '@/API/resolution/postLetters'

export const usePostLetters = () => {
  return useMutation(postLetters, {
    onSuccess: () => {
      console.log('success-post-letters')
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
