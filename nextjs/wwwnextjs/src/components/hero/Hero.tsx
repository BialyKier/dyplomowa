import { HeroPropsType } from "@/types/types";
import styles from "./hero.module.css";
import Image from "next/image";

export default function Hero(props: HeroPropsType) {
  const { publicUrl, bannerData, tytul } = props;

  return (
    <div role="banner" className="banner">
      {bannerData && (
        <Image
          className="hero"
          src={publicUrl}
          alt={bannerData.alternativeText}
          width={0}
          height={0}
          loading={"eager"}
          unoptimized={true}
        //   unoptimized={process.env.NODE_ENV === "development"}
        />
      )}
      <div className="skeleton">
        <h1>{tytul}</h1>
      </div>
    </div>
  );
}
