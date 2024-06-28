import Navbar from "./Navbar"; // Updated to import default export
import { Hero } from "./Hero";
import { Package } from "./Package";
import { NewsLetter } from "./NewsLetter";
import { Card } from "./Card";
import { Video } from "./Movie";
import { Footer } from "./Footer";

function Home({ user }) {
  return (
    <>
      <Navbar user={user} />
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
