export interface UseStoreType extends ActionType {
  firstname:string
  lastName:string
  increasePopulation?: () => void
  removeAllBears?: () => void
}

export type ActionType = {
  updateName: (firstName: UseStoreType['firstname']) => void
  updateLastName: (lastName: UseStoreType['lastName']) => void
}