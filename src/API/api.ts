import axios from 'axios'

const BASE_URL = 'https://letter.yourssu.com'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json',
  },
})

export default api
