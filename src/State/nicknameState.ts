import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'nicknameState',
  storage: sessionStorage,
})

export const nicknameState = atom<string>({
  key: 'nicknameState',
  default: '',
  effects_UNSTABLE: [persistAtom],
})
