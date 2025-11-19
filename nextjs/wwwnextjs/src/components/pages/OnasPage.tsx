import { PagePropsType } from "@/types/types";
import Hero from "../hero/Hero";
import parse from "html-react-parser";
const OnasPage = (props : PagePropsType) => {
//   const { banner, tresc, tytul, public_banner_url } = useGetContent();

const {banner, tresc, tytul } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;
  return (
    <>
      {banner && (
        <Hero bannerData={banner} publicUrl={public_banner_url} tytul={tytul} />
      )}

      {parse(tresc)}

      <div>{/* {parse(tresc)} */}</div>
    </>
  );
};

export default OnasPage;
