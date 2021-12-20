import React, { useState, useEffect } from "react";
import { BannerPage } from "../components/base/BannerPage";
import { Footer } from "../components/base/Footer";
import { Header } from "../components/base/Header";
import { RelatedTour } from "../components/common/RelatedTour";
import { SideBarTour } from "../components/common/SideBarTour";
import { TourAPI } from "../data/api/tours";
import parse from "html-react-parser";

export const TourDetail = ({ tour }) => {
  // const [tour, setTour] = useState({});
  // useEffect(() => {
  //   (async () => {
  //     setTour(await (await TourAPI.getTour("tour-1")).data);
  //   })();
  // }, []);
  console.log(tour);
  console.log(tour.summary);
  return (
    <div>
      <Header />
      <BannerPage page={tour} />
      <div className="page-content flex">
        <div className="w-3/4 page-content-detail py-5 px-5">
          <h3 className="text-center text-main font-bold text-4xl py-5">
            {tour.title}
          </h3>
          <div className="font-light text-paraGraph px-3">
            {parse(tour.summary)}
          </div>
          <div>{tour.category}</div>
          <div>
            {tour.timeline.map((e) => {
              return <div>{e.title}</div>;
            })}
          </div>
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
