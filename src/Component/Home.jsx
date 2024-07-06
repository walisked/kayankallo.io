import Navbar from "./Navbar";
import { Hero } from "./Hero";
import { Package } from "./Wallet";
import { NewsLetter } from "./NewsLetter";
import { Card } from "./Data";
import { Video } from "./Movie";
import { Footer } from "./Footer";

function Home({ user }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Package user={user} />
      <NewsLetter />
      <Card />
      <Video />
      <Footer />
    </>
  );
}

export default Home;
