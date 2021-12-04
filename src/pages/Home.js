import React from "react";
import { Footer } from "../components/base/Footer";
import { Header } from "../components/base/Header";
import { Intro } from "../components/base/Intro";
import { SlideShow } from "../components/base/SlideShow";

export const Home = () => {
  return (
    <div>
      <Header />
      {/* <BoxCarousel /> */}
      <SlideShow />
      <Intro />
      <Footer />
    </div>
  );
};
