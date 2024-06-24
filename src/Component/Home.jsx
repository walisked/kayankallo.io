import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Package } from "./Package";
import { NewsLetter } from "./NewsLetter";
import { Card } from "./Card";
import { Video } from "./Movie";
import { Footer } from "./Footer";


function Home() {
    return (
      <>
      <Navbar/>
      <Hero/>
      <Package/>
      <NewsLetter/>
      <Card/>
      <Video/>
      <Footer/>
      </>
    );
  }
  export default Home;