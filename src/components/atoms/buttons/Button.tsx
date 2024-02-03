import { FC } from 'react'

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  
  return (
    <div>
     {label}
    </div>
  )
}

export default Button;