import { HeroPropsType } from '@/types/types';
import styles from './hero.module.css';
import Image from 'next/image'




export default function Hero(props : HeroPropsType){
    const { publicUrl, bannerData } = props;

    return(
        <>
        {/* <img className={styles.alfa} src="/images/obrazek.jpg" alt="Banner" /> */}
        {bannerData && (
                         <Image className={styles.banner}
                              src={publicUrl} 
                              alt={bannerData.alternativeText}
                              width={0}  
                              height={0}
                              loading={"eager"}
                            unoptimized={process.env.NODE_ENV === "development"}
                            />
                           )
                       }
        </>
    );
}