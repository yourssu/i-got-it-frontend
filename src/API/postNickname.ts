import { Cookies } from 'react-cookie'
import client from './client'

const cookies = new Cookies()
export const postNickname = async (nickname: string) => {
  const data = await client.post(
    `api/v1/auth/sign-in/info`,
    { nickname },
    {
      headers: { Authorization: `Bearer ${cookies.get('accessToken')}` },
    }
  )
  return data.data
}
