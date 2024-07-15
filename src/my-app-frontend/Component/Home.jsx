import Navbar from "../Component/Common/Navbar";
import { Hero } from "./Hero";
import { Package } from "./Wallet";
import { NewsLetter } from "./NewsLetter";
import { Card } from "./Data";
import { Video } from "./Movie";
import { Footer } from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Package/>
      <NewsLetter />
      <Card />
      <Video />
      <Footer />
    </>
  );
}

export default Home;
