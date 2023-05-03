import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: `i-got-it-${import.meta.env.PACKAGE_VERSION}`,
  storage: sessionStorage,
})

export default persistAtom
