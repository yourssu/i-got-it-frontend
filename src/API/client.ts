import axios from 'axios'

const baseURL = 'https://letter.yourssu.com'
const client = axios.create({ baseURL })

export default client
