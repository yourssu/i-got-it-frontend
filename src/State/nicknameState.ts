import { atom } from 'recoil'

import persistAtom from './persistAtom'

export const nicknameState = atom<string>({
  key: 'nicknameState',
  default: '',
  effects_UNSTABLE: [persistAtom],
})
