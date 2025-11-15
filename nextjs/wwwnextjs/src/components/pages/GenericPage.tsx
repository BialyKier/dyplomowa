import { GetPageDataType, MyOwnPagesType } from "@/types/types";
import Image from 'next/image';



const GenericPage = (props : MyOwnPagesType) => {


 return(
     <>
      
    <p>Strona GENERYCZNA</p>
    <p>Dane strony GENERYCZNEJ:::: {props.bundle.data[0].tresc}</p>
    </>
 )   
}


export default GenericPage;