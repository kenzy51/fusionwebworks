import Head from "next/head";
import { Hero } from "@/widgets/HeroSection";
import { InfoSection } from "@/widgets/InfoSection";
import DeepResearch from "@/widgets/DeepResearch/ui/DeepResearch";
import { QR } from "@/widgets/QRSection";
import { Technologies } from "@/widgets/Technologies";
import PortfolioSection from "@/widgets/PortfolioSection/ui/PortfolioSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fusion Web - Innovative Web Products</title>
        <meta
          name="description"
          content="Fusion Web crafts high-performance web products, blending innovation, cutting-edge technology, and user-centric design to drive digital transformation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./icon2.png" />
      </Head>
      <Hero />
      <InfoSection />
      <DeepResearch />
      <Technologies />
      <PortfolioSection />
      <QR />
    </>
  );
}
