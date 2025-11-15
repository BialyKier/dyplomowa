import { MyOwnPagesType } from "@/types/types";
import Hero from "../hero/Hero";


const OnasPage = (props: MyOwnPagesType) => {
 const { banner : extendedBanner } = props.bundle.extended;
    const { banner }  = props.bundle.data[0];

   

 return(
    <>
    {banner && <Hero bannerData={banner} publicUrl={extendedBanner.public_banner_url} />}
     {/* {banner && (
                 <Image
                      src={extendedBanner.public_banner_url} 
                      alt={banner.alternativeText}
                      width={banner.width}  
                      height={banner.height}
                      loading={"eager"}
                         unoptimized={true} 
                    />
                   )
               } */}
    <p>Strona O Nas samych</p>

    {/* <p>Treść::: </p><div dangerouslySetInnerHTML={{ __html: props.bundle.data[0].tresc}}></div> */}
    {/* <div>{props.bundle.data[0].tresc}</div> */}
    {props.bundle.data[0].tresc}
 
    </>
 )   
}


export default OnasPage;