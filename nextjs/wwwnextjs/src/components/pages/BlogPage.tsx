import { PagePropsType } from "@/types/types";
import DisplayParsedContent from "../utils/DisplayParsedContent";

const BlogPage = (props : PagePropsType) => {
    const {banner, tresc, tytul } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;
  return (
    <>  
    
         <DisplayParsedContent content={tresc}/>
      <p>Strona Blog</p>
      <p>Dane strony Blog:::: {props.contentData.languageStatic.common.error_404}</p>
    </>
  );
};

export default BlogPage;
