export interface UseStoreType extends ActionType {
  firstname:string
  lastName:string
  increasePopulation?: () => void
  removeAllBears?: () => void
}

export type ActionType = {
  updateName: (firsName: UseStoreType['firstname']) => void
  updateLastName: (lastName: UseStoreType['lastName']) => void
}