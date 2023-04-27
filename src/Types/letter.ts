export type GetLetterInfo = {
  nickname: string
  content: string
}
export type GetLetterResponse = {
  letters: GetLetterInfo
  locked: boolean
}
