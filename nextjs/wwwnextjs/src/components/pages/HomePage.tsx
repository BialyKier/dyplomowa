import { PagePropsType } from "@/types/types";


const HomePage = (props : PagePropsType) => {
   const {banner, tresc, tytul } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;
  return (
    <>
      <p>Strona domowa</p>
      <p>Dane strony domowej:::: </p>
    </>
  );
};

export default HomePage;
