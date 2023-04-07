import Image, { StaticImageData } from "next/image";
import React from "react";
import heroStyles from "../styles/Hero.module.css";
import RedButton from "./RedButton";

export default function Hero({
  title,
  headerDescription,
  heroImg,
  buttonLink,
}: {
  title: string;
  headerDescription: string;
  heroImg: string;
  buttonLink: string;
}) {
  return (
    <div className={[heroStyles["hero-container"], "container"].join(" ")}>
      <div className={heroStyles["hero-image"]}>
        <Image
          fill
          src={heroImg}
          alt="Hero image, abstraction with colored blocks"
        />
      </div>
      <div className="">
        <h1>{title}</h1>
        <p>{headerDescription}</p>
        <RedButton buttonLink={buttonLink} />
      </div>
    </div>
  );
}
