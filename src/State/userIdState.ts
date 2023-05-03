import { atom } from 'recoil'

import persistAtom from './persistAtom'

export const userIdState = atom<number>({
  key: 'userIdState',
  default: -1,
  effects_UNSTABLE: [persistAtom],
})
