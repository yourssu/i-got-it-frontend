import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'userIdState',
  storage: sessionStorage,
})

export const userIdState = atom<number>({
  key: 'userIdState',
  default: -1,
  effects_UNSTABLE: [persistAtom],
})
