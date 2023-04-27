import { Cookies } from 'react-cookie'
import client from './client'
import { PostKakaoLoginResponse } from '../Types/login'

const cookies = new Cookies()
export const postCode = async (code: string): Promise<PostKakaoLoginResponse> => {
  const data = await client.post(`auth/sign-in/kakao`, {
    code,
  })

  cookies.set('accessToken', data.data.accessToken)
  return data.data
}
