import { atom } from 'recoil'
import { SelectedCheerType } from '@/Types/SelectedCheerType'

export const selectedCheerState = atom<SelectedCheerType>({
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

export const showDialogState = atom<boolean>({
  key: 'showDialogState',
  default: false,
})
