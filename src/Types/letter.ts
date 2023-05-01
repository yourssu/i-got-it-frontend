export type GetLetterInfo = {
  letterId: number
  nickname: string
  content: string
}
export type GetLetterResponse = {
  letters: GetLetterInfo[]
  isLocked: boolean
  isDeleted: boolean
}

export type PostLetterResponse = {
  lettId: number
}
