import { MyOwnPagesType } from "@/types/types";



const KontaktPage = (props: MyOwnPagesType) => {


 return(
    <>
    <p>Strona Kontaktu</p>
    <p>Dane strony Kontakt:::: {props.bundle.data[0].tresc}</p>
    </>
 )   
}


export default KontaktPage;