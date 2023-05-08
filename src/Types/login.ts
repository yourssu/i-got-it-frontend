export type PostKakaoLoginResponse = {
  userId: number
  nickname: string
  resolutionId: string
  accessToken: string
}

export type PostRefreshResponse = {
  accessToken: string
}
