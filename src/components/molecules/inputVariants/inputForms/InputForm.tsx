import React, { FC } from 'react'

interface InputFormProps {
  name: string;
}

const InputForm: FC<InputFormProps> = ({ name }) => {
  return (
    <div>
     {name}
    </div>
  )
}

export default InputForm;