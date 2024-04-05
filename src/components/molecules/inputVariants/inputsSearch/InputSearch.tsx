import React, { ChangeEvent } from "react";
import {  InputBasic } from "@atoms/";
import { UsePageOneContext } from "@context/";
import { ButtonSearch } from "../..";

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
      <ButtonSearch type="button" className={props.buttonSearchStyle}>
        Search
      </ButtonSearch>
    </div>
  );
};

export default InputSearch;
