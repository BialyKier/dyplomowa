import { PagePropsType } from "@/types/types";
import DisplayParsedContent from "../utils/DisplayParsedContent";


const HomePageTemplate = (props : PagePropsType) => {
   const {banner, content, title } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;
  return (
    <> 
    
        <DisplayParsedContent content={content}/>
      <p>Strona domowa</p>
      <p>Dane strony domowej:::: </p>
    </>
  );
};

export default HomePageTemplate;
