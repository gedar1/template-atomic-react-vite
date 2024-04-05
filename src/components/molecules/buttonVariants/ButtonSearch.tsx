import React,{ ButtonHTMLAttributes } from 'react'
import { ButtonBasic } from '@atoms/'

interface ButtonSearchType {
  type: ButtonHTMLAttributes<HTMLElement>['type']
  className: string
  children: React.ReactNode
}

export const ButtonSearch = ({children,type,className}: ButtonSearchType) => {

  return (
    <ButtonBasic type={type} className={className}>
      {children}
    </ButtonBasic>
  )
}

export default ButtonSearch