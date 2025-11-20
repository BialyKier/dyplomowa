import { PagePropsType } from "@/types/types";
import Hero from "../hero/Hero";
import DisplayParsedContent from "../utils/DisplayParsedContent";


const KontaktPage = (props : PagePropsType) => {
  const {banner, tresc, tytul } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;

  return (
    <>
      {banner && (
        <Hero bannerData={banner} publicUrl={public_banner_url} tytul={tytul} />
      )}


      <DisplayParsedContent content={tresc}/>
      <p>Strona Kontaktu</p>
      <p>Dane strony Kontakt:::: </p>
     

    </>
  );
};

export default KontaktPage;
