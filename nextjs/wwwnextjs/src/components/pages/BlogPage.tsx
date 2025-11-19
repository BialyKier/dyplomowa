import { PagePropsType } from "@/types/types";
import parse from "html-react-parser";

const BlogPage = (props : PagePropsType) => {
    const {banner, tresc, tytul } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;
  return (
    <>  {tresc}
    
          <div>{parse(tresc)}</div>
      <p>Strona Blog</p>
      <p>Dane strony Blog:::: </p>
    </>
  );
};

export default BlogPage;
