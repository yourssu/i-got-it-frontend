import { useMutation } from 'react-query'
import { postNickname } from '../API/postNickname'

export const usePostNickname = () => {
  return useMutation(postNickname, {
    onMutate() {},
    onSuccess: () => {
      console.log('success')
    },
    onError: (err) => {
      console.log(err)
    },
  })
}
