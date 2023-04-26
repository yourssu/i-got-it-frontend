import axios from 'axios'

const BASE_URL = 'http://letter.yourssu.com'
// 토큰 받아오기

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json',
  },
})

export default api
