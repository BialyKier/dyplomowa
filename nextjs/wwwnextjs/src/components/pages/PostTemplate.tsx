import { PagePropsType } from "@/types/types";
import Hero from "../hero/Hero";

const PostTemplate = (props : PagePropsType) => {
const {banner, tresc, tytul, zajawka } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;
  return (
    <>
      <p>Post TEMPLATKA</p>
      {banner && (
        <Hero bannerData={banner} publicUrl={public_banner_url} tytul={tytul} />
      )}

      {tresc}

      <div>{/* {parse(tresc)} */}</div>
      {zajawka}
    </>
  );
};

export default PostTemplate;
