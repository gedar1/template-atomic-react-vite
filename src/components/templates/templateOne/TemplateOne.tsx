import { InputSearch } from "@molecules/";
import "./index.css";
import { TextBasic } from "@atoms/";

export const TemplateOne = () => {
  return (
    <>
      <div className="template-one">
        <TextBasic className={"text-basic"}>
          <span>hola</span>
        </TextBasic>
        <InputSearch
          className={"inputContentsearch"}
          inputSearchStyle={"input-search"}
          buttonSearchStyle={"btn-search"}
        />
      </div>
    </>
  );
};

export default TemplateOne;
