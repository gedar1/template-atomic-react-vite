import { InputSearch } from "@molecules/";
import './index.css'

export const TemplateOne = () => {
  
  return (
    <div className="template-one">
      <h4 className="read-the-docs">
        Atomic desing react vite
      </h4>
      <InputSearch className={"inputContentsearch"} inputSearchStyle={'input-search'} buttonSearchStyle={'btn-search'}  />   
    </div>
  );
};

export default TemplateOne;
