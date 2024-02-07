import React, { ChangeEvent } from "react";
import { Button, InputBasic } from "@atoms/";
import { UsePageOneContext } from "@context/";
import './index.css';

interface InputSearchProps  {
  className: string;
  inputSearchStyle:string
  buttonSearchStyle:string
}


export const InputSearch  =({...props}: InputSearchProps) => {
  const { updateName } = UsePageOneContext();

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    updateName(e.target.value);
  };
  return (
    <div className={props.className}>
      <InputBasic className={props.inputSearchStyle} onChange={(e) => handleSearchInput(e)} />
      <Button type="button" className={props.buttonSearchStyle}>
        Search
      </Button>
    </div>
  );
};

export default InputSearch;
