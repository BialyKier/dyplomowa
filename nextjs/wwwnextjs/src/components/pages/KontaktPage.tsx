import Hero from "../hero/Hero";
import { useGetContent } from "../hooks/useGetContent";

const KontaktPage = () => {
  const { banner, tresc, tytul, public_banner_url } = useGetContent();

  return (
    <>
      {banner && (
        <Hero bannerData={banner} publicUrl={public_banner_url} tytul={tytul} />
      )}

      <p>Strona Kontaktu</p>
      <p>Dane strony Kontakt:::: </p>
     
      {tresc}
    </>
  );
};

export default KontaktPage;
