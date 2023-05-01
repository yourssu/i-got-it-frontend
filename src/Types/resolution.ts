export interface IpostResolutionResponse {
  data: { resolutionId: string }
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
