export interface IpostResolutionResponse {
  data: { resolutionUniqueId: string }
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
