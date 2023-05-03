import { atom } from 'recoil'

import persistAtom from './persistAtom'

export const resolutionState = atom<string>({
  key: 'resolutionState',
  default: localStorage.getItem('resolution') || '',
})

export const resolutionIdState = atom<string>({
  key: 'resolutionIdState',
  default: '',
  effects_UNSTABLE: [persistAtom],
})
