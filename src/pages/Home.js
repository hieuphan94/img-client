import React from "react";
import { Footer } from "../components/base/Footer";
import { Header } from "../components/base/Header";
import { BoxCarousel } from "../components/common/BoxCarousel";

export const Home = () => {
  return (
    <div>
      <Header />
      <BoxCarousel />
      <Footer />
    </div>
  );
};
