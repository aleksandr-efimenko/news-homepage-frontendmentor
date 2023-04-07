import Image from "next/image";
import React from "react";
import heroStyles from "../styles/Hero.module.css";
import RedButton from "./RedButton";

export default function Hero({
  title,
  heroImgDesktop,
  heroImgMobile,
  heroDescription: heroDescription,
  buttonLink,
}: {
  title: string;
  heroDescription: string;
  heroImgDesktop: string;
  heroImgMobile: string;
  buttonLink: string;
}) {
  return (
    <div className={[heroStyles["hero-container"], "container"].join(" ")}>
      <div className={heroStyles["hero-image"]}>
        <Image
          fill
          priority
          src={heroImgDesktop}
          style={{
            objectFit: 'cover',
          }}
          alt="Hero image, abstraction with colored blocks"
        />
      </div>

        <h1 className={heroStyles['hero-title']}>{title}</h1>
        <div className={heroStyles['hero-description-container']}>
          <p className={heroStyles['hero-text']}>{heroDescription}</p>
          <RedButton buttonLink={buttonLink} />
        </div>
    </div>
  );
}
