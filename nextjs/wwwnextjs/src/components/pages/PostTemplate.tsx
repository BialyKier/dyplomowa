import Hero from "../hero/Hero";
import { useGetContent } from "../hooks/useGetContent";

const PostTemplate = () => {
  const { banner, tresc, tytul, public_banner_url, zajawka} = useGetContent();
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
