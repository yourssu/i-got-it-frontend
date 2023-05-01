export interface IpostResolutionResponse {
  data: { resolutionId: number }
}

export interface IGetResolutionResponse {
  data: {
    userId: number
    nickname: string
    content: string
    dday: number
    isDeleted: boolean
    status: 'INPROGRESS' | 'DONE'
  }
}
