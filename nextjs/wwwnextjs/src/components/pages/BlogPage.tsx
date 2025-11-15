import { MyOwnPagesType } from "@/types/types";



const BlogPage = (props: MyOwnPagesType) => {


 return(
     <>
    <p>Strona Blog</p>
    <p>Dane strony Blog:::: {props.bundle.data[0].tresc}</p>
    </>
 )   
}


export default BlogPage;