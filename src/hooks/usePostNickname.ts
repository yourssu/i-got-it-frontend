import { useMutation } from 'react-query'
import { postNickname } from '../API/postNickname'

export const usePostNickname = () => {
  return useMutation(postNickname, {
    onMutate() {},
    onSuccess: () => {},
    onError: (err) => {
      console.log(err)
    },
  })
}
