import { useMutation } from 'react-query'

import { deleteWithdraw } from '@/API/Withdraw/deleteWithdraw'

export const useDeleteWithdraw = () => {
  return useMutation(deleteWithdraw, {
    onSuccess: () => {},
    onError: () => {},
  })
}
