import { InputHTMLAttributes, FC } from 'react';

const InputBasic : FC<InputHTMLAttributes<HTMLInputElement>> = ({...props}) => {
  return (
    <input className={props['className']} onChange={props['onChange']} >
    </input>
  )
}

export default InputBasic