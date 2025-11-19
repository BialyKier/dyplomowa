import { PagePropsType } from "@/types/types";
import parse from "html-react-parser";

const HomePage = (props : PagePropsType) => {
   const {banner, tresc, tytul } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;
  return (
    <>  {tresc}
    
          <div>{parse(tresc)}</div>
      <p>Strona domowa</p>
      <p>Dane strony domowej:::: </p>
    </>
  );
};

export default HomePage;
