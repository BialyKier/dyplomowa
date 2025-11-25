import { PagePropsType } from "@/types/types";
import Hero from "../hero/Hero";
import DisplayParsedContent from "../utils/DisplayParsedContent";
// import parse from "html-react-parser";
const OnasPage = (props : PagePropsType) => {
//   const { banner, tresc, tytul, public_banner_url } = useGetContent();

const {banner, content, title } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;
  return (
    <>
      {banner && (
        <Hero bannerData={banner} publicUrl={public_banner_url} title={title} />
      )}

       <DisplayParsedContent content={content}/>
       <p>{props.contentData.languageStatic.common.read_more}</p>
 

      
    </>
  );
};

export default OnasPage;
