import  { FC } from "react";
import { TemplateOne } from "@templates/";

import { UsePageOneContext } from "@context/"

interface IndexProps {
  title: string;
}

export const PageOne: FC<IndexProps> = ({ title }) => {
 
  const {firstname} = UsePageOneContext()
  console.log(firstname)
  return (
    <div>
      <div>Title: {firstname}</div>
      <div />
      {title}
      <TemplateOne />
    </div>
  );
};

export default PageOne;
