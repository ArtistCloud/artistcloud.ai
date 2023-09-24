import React from "react";
import Hero from "../components/screen/Hero";
import Gallery from "../components/screen/Gallery";
import About from "../components/screen/About";
import Founder from "../components/screen/Founder";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Gallery />
      <About />
      <Founder />
    </React.Fragment>
  );
};

export default Home;
