import {FC, PropsWithChildren,createContext, useContext} from 'react'
import { useStoreBears } from '@store/'


interface ISummaryContext {}

const PageTwoContext = createContext({} as ISummaryContext)

export const UsePageTwoContext = () => useContext(PageTwoContext)

export const PageTwoProvider: FC<PropsWithChildren> = ({children}) => {

  const { Provider} = PageTwoContext
  const context = useStoreBears()
  return (
    <Provider value={context}>
    {children} 
    </Provider>
  )
}
