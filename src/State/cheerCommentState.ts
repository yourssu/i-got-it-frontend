import { atom } from 'recoil'

export const cheerCommentState = atom<number>({
  key: 'cheerCommentState',
  default: -1,
})
