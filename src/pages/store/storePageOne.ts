import { create } from 'zustand'
import { UseStoreType } from '@typings/'


export const useStoreBears = create<UseStoreType>((set) => ({
  firstname: '',
  lastName:'',
  removeAllBears: () => set({ firstname : '' }),
  updateName : (name) => set (() => ({firstname: name})),
  updateLastName : (lastname) => set (() => ({lastName: lastname}))
}))

