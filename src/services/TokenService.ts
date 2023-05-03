class TokenService {
  set(accessToken: string) {
    sessionStorage.setItem('accessToken', accessToken)
  }

  get() {
    return sessionStorage.getItem('accessToken')
  }

  logout() {
    sessionStorage.removeItem('accessToken')
  }
}

const api = new TokenService()

export default api
