import { atom } from 'recoil'

import persistAtom from './persistAtom'

export const resolutionState = atom<string>({
  key: 'resolutionState',
  default: '',
  effects: [persistAtom],
})

export const resolutionIdState = atom<string>({
  key: 'resolutionIdState',
  default: '',
  effects: [persistAtom],
})

export const resolutionIsExistedState = atom<boolean>({
  key: 'resolutionIsExistedState',
  default: false,
})
