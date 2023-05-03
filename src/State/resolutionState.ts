import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'resolutionIdState',
  storage: sessionStorage,
})

export const resolutionState = atom<string>({
  key: 'resolutionState',
  default: localStorage.getItem('resolution') || '',
})

export const resolutionIdState = atom<string>({
  key: 'resolutionIdState',
  default: '',
  effects_UNSTABLE: [persistAtom],
})
