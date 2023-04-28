export type GetLetterInfo = {
  nickname: string
  content: string
}
export type GetLetterResponse = {
  letters: GetLetterInfo[]
  isLocked: boolean
}

export type PostLetterResponse = {
  lettId: number
}
