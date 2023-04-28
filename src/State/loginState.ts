import { atom } from 'recoil'

export const nicknameState = atom<string>({
  key: 'nicknameState',
  default: '',
})

export const userIdState = atom<number>({
  key: 'userIdState',
  default: -1,
})
