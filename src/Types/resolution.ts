export interface IGetResolutionResponse {
  nickname: string
  content: string
  dday: number
  status: 'INPROGRESS' | 'DONE'
}
