import { FC, HTMLAttributes } from 'react';


export const TextBasic : FC<HTMLAttributes<HTMLHeadingElement>> = ({children,...props}) => {
  
  return (
    <h1 className={props.className} >
      {children}
    </h1>
  )
}




