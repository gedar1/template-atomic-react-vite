import {FC, PropsWithChildren,createContext, useContext} from 'react'
import { useStoreBears } from '@store/'
import { UseStoreType } from '@typings/'


const PageOneContext = createContext({} as UseStoreType)

export const UsePageOneContext = () => useContext(PageOneContext)

export const PageOneProvider: FC<PropsWithChildren> = ({children}) => {

  const { Provider} = PageOneContext
  const context = useStoreBears()
  return (
    <Provider value={context}>
    {children} 
    </Provider>
  )
}
