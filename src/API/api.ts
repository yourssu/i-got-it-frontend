import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const BASE_URL = 'https://letter.yourssu.com'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${cookies.get('accessToken')}`,
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json',
  },
})

export default api
