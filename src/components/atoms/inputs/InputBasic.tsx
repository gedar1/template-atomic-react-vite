



export interface InputPropsType {
  handleOnChange?: () => void
} 

const InputBasic = ({handleOnChange}: InputPropsType) => {

  return (
    <input onChange={handleOnChange}>
    </input>
  )
}

export default InputBasic