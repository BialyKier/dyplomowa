import { PagePropsType } from "@/types/types";


const BlogPage = (props : PagePropsType) => {
    const {banner, tresc, tytul } = props.contentData.pageData.data;
const {public_banner_url} = props.contentData.pageData.extended.banner;
  return (
    <>
      <p>Strona Blog</p>
      <p>Dane strony Blog:::: </p>
    </>
  );
};

export default BlogPage;
