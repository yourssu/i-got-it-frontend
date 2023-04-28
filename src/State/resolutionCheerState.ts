import { atom } from 'recoil'
import { selectedCheerType } from '../Types'

export const selectedCheerState = atom<selectedCheerType>({
  key: 'selectedCheerState',
  default: {
    writer: '',
    comment: '',
  },
})
