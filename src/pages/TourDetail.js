import React from "react";
import { BannerPage } from "../components/base/BannerPage";
import { Footer } from "../components/base/Footer";
import { Header } from "../components/base/Header";
import { RelatedTour } from "../components/common/RelatedTour";
import { SideBarTour } from "../components/common/SideBarTour";

export const TourDetail = () => {
  const page = {
    title: "Tour Mien Bac",
    decs: "Được thiên nhiên ưu ái, miền Bắc sở hữu rất nhiều thắng cảnh thiên nhiên tuyệt đẹp khiến du khách yêu từ cái nhìn đầu tiên. Với ba khu vực địa lý Tây Bắc, Đông Bắc và Đồng bằng sông Hồng, miền Bắc chiếm 28,8% diện tích cả nước. Vì sự rộng lớn và sự khác biệt về thiên nhiên, khí hậu, văn hóa giữa ba khu vực nên trong phạm vi bài viết này",
  };
  return (
    <div>
      <Header />
      <BannerPage />
      <div className="page-content flex">
        <div className="w-3/4 page-content-detail py-5 px-5">
          <h3 className="text-center text-main font-bold text-4xl py-5">
            {page.title}
          </h3>
          <p className="font-light text-paraGraph px-3">{page.decs}</p>
          <div className=""></div>
          <RelatedTour />
        </div>
        <div className="w-1/4">
          <SideBarTour />
        </div>
      </div>
      <Footer />
    </div>
  );
};
