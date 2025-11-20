import { PagePropsType } from "@/types/types";
import Hero from "../hero/Hero";
import DisplayParsedContent from "../utils/DisplayParsedContent";
const PostTemplate = (props : PagePropsType) => {
const {banner, tresc, tytul, zajawka } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;
  return (
    <>
      <p>Post TEMPLATKA</p>
      {banner && (
        <Hero bannerData={banner} publicUrl={public_banner_url} tytul={tytul} />
      )}

     
      <p>{props.contentData.languageStatic.common.loading}</p>
      <DisplayParsedContent content={tresc}/>
      <DisplayParsedContent content={zajawka}/>
    </>
  );
};

export default PostTemplate;
