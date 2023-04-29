export type GetLetterInfo = {
  nickname: string
  content: string
  // letterId: number 추가 예정
}
export type GetLetterResponse = {
  letters: GetLetterInfo[]
  isLocked: boolean
}

export type PostLetterResponse = {
  lettId: number
}
