import React, { useState, useEffect } from "react";
import { BannerPage } from "../components/base/BannerPage";
import { Footer } from "../components/base/Footer";
import { Header } from "../components/base/Header";
import { RelatedTour } from "../components/common/RelatedTour";
import { SideBarTour } from "../components/common/SideBarTour";
import { TourAPI } from "../data/api/tours";

export const TourDetail = () => {
  const [tour, setTour] = useState({});
  useEffect(() => {
    (async () => {
      setTour(await (await TourAPI.getTour("tour-1")).data);
    })();
  }, []);
  return (
    <div>
      <Header />
      <BannerPage page={tour} />
      <div className="page-content flex">
        <div className="w-3/4 page-content-detail py-5 px-5">
          <h3 className="text-center text-main font-bold text-4xl py-5">
            {tour.title}
          </h3>
          <p className="font-light text-paraGraph px-3">{tour.decs}</p>
          <div className=""></div>
          <RelatedTour />
        </div>
        <div className="w-1/4">
          <SideBarTour tour={tour} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
