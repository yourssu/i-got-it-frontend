import { atom } from 'recoil'

import persistAtom from './persistAtom'

export const letterState = atom<string>({
  key: 'letterState',
  default: '',
  effects: [persistAtom],
})
