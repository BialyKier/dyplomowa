import { PagePropsType } from "@/types/types";
import DisplayParsedContent from "../utils/DisplayParsedContent";


const HomePage = (props : PagePropsType) => {
   const {banner, tresc, tytul } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;
  return (
    <> 
    
        <DisplayParsedContent content={tresc}/>
      <p>Strona domowa</p>
      <p>Dane strony domowej:::: </p>
    </>
  );
};

export default HomePage;
