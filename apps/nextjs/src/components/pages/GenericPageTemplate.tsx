import { PagePropsType } from "@/types/types";
import DisplayParsedContent from "../utils/DisplayParsedContent";

const GenericPageTemplate = (props : PagePropsType) => {
    const {banner, content, title } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;
  return (
    <> 
    
       <DisplayParsedContent content={content}/>
      <p>Strona GENERYCZNA</p>
      <p>Dane strony GENERYCZNEJ:::: </p>
    </>
  );
};

export default GenericPageTemplate;
