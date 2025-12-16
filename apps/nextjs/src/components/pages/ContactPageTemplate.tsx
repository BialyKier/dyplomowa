import { PagePropsType } from "@/types/types";
import Hero from "../hero/Hero";
import DisplayParsedContent from "../utils/DisplayParsedContent";


const ContactPageTemplate = (props : PagePropsType) => {
  const {banner, content, title } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;

  return (
    <>
      {banner && (
        <Hero bannerData={banner} publicUrl={public_banner_url} title={title} />
      )}


      <DisplayParsedContent content={content}/>
      <p>Strona Kontaktu</p>
      <p>Dane strony Kontakt:::: </p>
     

    </>
  );
};

export default ContactPageTemplate;
