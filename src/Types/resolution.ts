export interface IpostResolutionResponse {
  data: { resolutionUniqueId: string }
}

export interface IGetResolutionResponse {
  data: {
    userId: number
    nickname: string
    content: string
    dday: number
    status: 'INPROGRESS' | 'DONE'
  }
}
