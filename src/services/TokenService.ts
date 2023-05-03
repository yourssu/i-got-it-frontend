import { Cookies } from 'react-cookie'

class TokenService {
  cookie = new Cookies()

  set(accessToken: string) {
    this.cookie.set('accessToken', accessToken, { path: '/' })
  }

  get() {
    return this.cookie.get('accessToken')
  }

  logout() {
    this.cookie.remove('accessToken')
  }

  get headers() {
    return {
      Authorization: `Bearer ${this.get()}`,
    }
  }
}

const api = new TokenService()

export default api
