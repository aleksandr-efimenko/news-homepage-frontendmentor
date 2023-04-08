import Head from "next/head";
import Hero from "@/components/Hero";
import styles from "@/styles/Home.module.css";
import NewsColumn from "@/components/NewsColumn";
import { HeroData, NewsColumnData, NewsRowData } from "@/utils/interface";
import { nanoid } from "nanoid";
import NewsRow from "@/components/NewsRow";

const heroData: HeroData = {
  title: "The Bright Future of Web 3.0?",
  heroDescription:
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  heroImgDesktop: "/static/images/image-web-3-desktop.jpg",
  heroImgMobile: "/static/images/image-web-3-mobile.jpg",
  buttonLink: "#",
};

const newsColumnData: NewsColumnData[] = [
  {
    id: nanoid(),
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
    link: "#",
  },
  {
    id: nanoid(),
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
    link: "#",
  },
  {
    id: nanoid(),
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    link: "#",
  },
];

const newsRowData: NewsRowData[] = [
  {
    id: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    imgSrc: "@/static/images/image-reviving-retro-pcs.jpg",
    link: "#",
  },
  {
    id: "02",
    title: " Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    imgSrc: "@/static/images/image-top-10-laptops.jpg",
    link: "#",
  },
  {
    id: "03",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    imgSrc: "@/static/images/image-growth-of-gaming.jpg",
    link: "#",
  },
];

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
      <div
        className={[styles["main-page-grid-container"], "container"].join(" ")}
      >
        <Hero
          title={heroData.title}
          heroDescription={heroData.heroDescription}
          heroImgDesktop={heroData.heroImgDesktop}
          heroImgMobile={heroData.heroImgMobile}
          buttonLink={heroData.buttonLink}
        />
        <NewsColumn {...newsColumnData} />
        <NewsRow {...newsRowData} />
      </div>
    </>
  );
}
