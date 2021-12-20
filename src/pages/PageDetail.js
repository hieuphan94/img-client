import React from "react";
import { BannerPage } from "../components/base/BannerPage";
import { Footer } from "../components/base/Footer";
import { Header } from "../components/base/Header";
import { RelatedTour } from "../components/common/RelatedTour";
import { SideBar } from "../components/common/SideBar";
import ReactHtmlParser from "react-html-parser";

export const PageDetail = ({ item }) => {
  console.log(typeof item.desc);
  return (
    <div>
      <Header />
      <BannerPage page={item} />
      <div className="page-content flex">
        <div className="w-3/4 page-content-detail py-5 px-5">
          <h3 className="text-center text-main font-bold text-4xl py-5">
            {item.title}
          </h3>
          <p className="font-light text-paraGraph px-3">{item.decs}</p>
          {ReactHtmlParser(item.desc)}
          <div className=""></div>
          {/* <RelatedTour /> */}
        </div>
        <div className="w-1/4">
          <SideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};
