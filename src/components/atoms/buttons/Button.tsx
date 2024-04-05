import { ButtonHTMLAttributes, FC } from 'react'



export const ButtonBasic: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children,...props}) => {

  return (
    <button
    type={props.type}
    className={props.className}>
      {children}
    </button>
  )
}

export default ButtonBasic;