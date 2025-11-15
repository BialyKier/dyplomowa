import { MyOwnPagesType } from "@/types/types";
import Image from 'next/image';


const HomePage = (props: MyOwnPagesType) => {


 return(
    <>
    
    <p>Strona domowa</p>
    <p>Dane strony domowej:::: {props.bundle.data[0].tresc}</p>
    </>
 )   
}


export default HomePage;