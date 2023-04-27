import axios from 'axios'

const baseURL = 'https://letter.yourssu.com/api/v1'
const client = axios.create({ baseURL })

export default client
