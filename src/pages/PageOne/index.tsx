import  React, { FC } from "react";
import { TemplateOne } from "@templates/";
import { validar } from '../../utils/helpers'

import { UsePageOneContext } from "@context/"
import { TextBasic } from "@src/components";

interface IndexProps {
  title: string;
}

export const PageOne: FC<IndexProps> = ({ title }) => {
  const {firstname} = UsePageOneContext()
  const keyClaves = 'televisor'
  const text1 = firstname
  console.log(firstname)
  const component = React.createElement('div', null , <TextBasic>{firstname}</TextBasic>);
  //const component2 = React.createElement('div', null , <TextBasic>{title}</TextBasic>);
  const validated = validar(text1,keyClaves)
  console.log(validated)
  return (
  // <>
  // {component2}
  // </>
  <div>
      <div>Title: {firstname}</div>
      {/* {title === 'Page One' && component} */}
      {validated[0] === 0 && component}
      <div />
      {title}
      <TemplateOne />
      
    </div>
  );
};

export default PageOne;
