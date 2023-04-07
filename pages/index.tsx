import Head from "next/head";
import Hero from "@/components/Hero";

const heroData = {
  title: "The Bright Future of Web 3.0?",
  headerDescription:
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  heroImg: '/static/images/image-web-3-desktop.jpg',
  buttonLink: "/",
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
        headerDescription={heroData.headerDescription}
        heroImg={heroData.heroImg}
        buttonLink={heroData.buttonLink}
      />
    </>
  );
}
