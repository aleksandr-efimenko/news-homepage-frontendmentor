import Head from "next/head";
import Hero from "@/components/Hero";

const heroData = {
  title: "The Bright Future of Web 3.0?",
  headerDescription:
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  heroImgDesktop: '/static/images/image-web-3-desktop.jpg',
  heroImgMobile: '/static/images/image-web-3-mobile.jpg',
  buttonLink: "#",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>News homepage</title>
        <meta
          name="description"
          content="Frontend Mentor challenge News homepage"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title={heroData.title}
        heroDescription={heroData.headerDescription}
        heroImgDesktop={heroData.heroImgDesktop}
        heroImgMobile={heroData.heroImgMobile}
        buttonLink={heroData.buttonLink}
      />
    </>
  );
}
