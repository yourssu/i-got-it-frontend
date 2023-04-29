import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'resolutionIdState',
  storage: sessionStorage,
})

export const resolutionState = atom<string>({
  key: 'resolutionState',
  default: '',
})

export const resolutionIdState = atom<number>({
  key: 'resolutionIdState',
  default: -1,
  effects_UNSTABLE: [persistAtom],
})
