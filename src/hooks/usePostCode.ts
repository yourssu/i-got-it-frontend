import { useMutation } from "react-query"
import { postCode } from "../API/postCode"

export const usePostCode = () => {
  return useMutation(postCode, {
    onMutate() {},
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    }
  })
}
