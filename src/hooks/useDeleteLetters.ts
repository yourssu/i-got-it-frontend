import { useMutation } from 'react-query'

import { deleteLetters } from '@/API/resolution/deleteLetters'

export const useDeleteLetters = () => {
  return useMutation(deleteLetters, {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onMutate() {},
    onSuccess: () => {
      console.log('success-delete-letter')
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
