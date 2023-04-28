export interface IpostResolutionResponse {
  data: { resolutionId: number }
}

export interface IGetResolutionResponse {
  data: {
    nickname: string
    content: string
    dday: number
    status: 'INPROGRESS' | 'DONE'
  }
}
