import { atom } from 'recoil'
import { selectedCheerType } from '../Types'

export const selectedCheerState = atom<selectedCheerType>({
  key: 'selectedCheerState',
  default: {
    writer: '',
    comment: '',
  },
})

export const cheerCommentState = atom<number>({
  key: 'cheerCommentState',
  default: -1,
})

export const addCheerState = atom<boolean>({
  key: 'addCheerState',
  default: false,
})
