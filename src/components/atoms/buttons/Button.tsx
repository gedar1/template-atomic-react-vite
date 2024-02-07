import { ButtonHTMLAttributes, FC } from 'react'



const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children,...props}) => {

  return (
    <button
    type={props.type}
    className={props.className}>
      {children}
    </button>
  )
}

export default Button;