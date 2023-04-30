import { useMutation } from 'react-query'
import { deleteLetters } from '@/API/resolution/deleteLetters'

export const useDeleteLetters = () => {
  return useMutation(deleteLetters, {
    onMutate() {},
    onSuccess: () => {
      console.log('success-delete-letter')
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
