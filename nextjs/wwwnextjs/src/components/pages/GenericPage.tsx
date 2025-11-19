import { PagePropsType } from "@/types/types";

const GenericPage = (props : PagePropsType) => {
    const {banner, tresc, tytul } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;
  return (
    <>
      <p>Strona GENERYCZNA</p>
      <p>Dane strony GENERYCZNEJ:::: </p>
    </>
  );
};

export default GenericPage;
