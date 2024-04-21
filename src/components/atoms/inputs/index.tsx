import { InputHTMLAttributes, FC } from 'react';

export const InputBasic : FC<InputHTMLAttributes<HTMLInputElement>> = ({...props}) => {
  return (
    <input className={props.className} onChange={props.onChange} >
    </input>
  )
}

