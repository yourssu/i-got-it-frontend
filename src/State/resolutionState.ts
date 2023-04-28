import { atom } from 'recoil'

export const resolutionState = atom<string>({
  key: 'resolutionState',
  default: '',
})

export const resolutionIdState = atom<number>({
  key: 'resolutionIdState',
  default: -1,
})
