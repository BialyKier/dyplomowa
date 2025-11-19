import { PagePropsType } from "@/types/types";
import Hero from "../hero/Hero";
import parse from "html-react-parser";

const KontaktPage = (props : PagePropsType) => {
  const {banner, tresc, tytul } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;

  return (
    <>
      {banner && (
        <Hero bannerData={banner} publicUrl={public_banner_url} tytul={tytul} />
      )}

      <p>Strona Kontaktu</p>
      <p>Dane strony Kontakt:::: </p>
     
      {parse(tresc)}
    </>
  );
};

export default KontaktPage;
