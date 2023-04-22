import axios from 'axios'

const host = 'kauth.kakao.com'
const url = '/oauth/token'
const grantType = 'authorization_code'

export const postCode = async (code: string) => {
  const data = await axios.post(
    `https://${host}${url}?grant_type=${grantType}&client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&code=${code}`,
    {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    }
  )
  return data
}
