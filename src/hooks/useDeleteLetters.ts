import { useMutation } from 'react-query'

import { deleteLetters } from '@/API/resolution/deleteLetters'

export const useDeleteLetters = () => {
  return useMutation(deleteLetters, {
    onSuccess: () => {},
    onError: (err) => {},
  })
}
