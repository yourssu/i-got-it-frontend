import { atom } from 'recoil'

export const resolutionState = atom<string>({
  key: 'resolutionState',
  default: '',
})

export const letterState = atom<string>({
  key: 'letterState',
  default: 'letter',
})
