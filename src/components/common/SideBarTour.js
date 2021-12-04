import React from "react";
import { AiOutlineDollarCircle, AiFillStar, AiFillPhone } from "react-icons/ai";
import { BsHeadphones } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { RecommendBar } from "./RecommendBar";
import { FormTour } from "./FormTour";

export const SideBarTour = () => {
  return (
    <div className="sidebar px-5 py-5">
      {/* Tour Form */}
      <FormTour />
      {/* Search */}
      <div className="sidebar-element search py-5">
        <h3 className="font-bold py-3 my-2">Bạn muốn đi đâu?</h3>
        <input
          type="text"
          className="rounded-md w-full py-2 my-2 border-menuColor border-solid border-2"
        />
        <button className="btn bg-main rounded-md w-full my-2 py-2">
          Search
        </button>
      </div>
      {/* Ads */}
      <div className="sidebar-elment bg-blackThin ads my-8 py-5">
        <h3 className="font-bold py-3 my-2 text-center">
          Tại sao lại chọn tour của Images Travel?
        </h3>
        <div className="flex my-4 items-center px-5 justify-start">
          <AiOutlineDollarCircle className="text-main text-2xl" />
          <span className="px-4">Giá tour trọn gói không chi phí ẩn</span>
        </div>
        <div className="flex my-4 items-center px-5 justify-start">
          <BsHeadphones className="text-main text-2xl" />
          <span className="px-4">Dịch vụ CSKH 24/7</span>
        </div>
        <div className="flex my-4 items-center px-5 justify-start">
          <AiFillStar className="text-main text-2xl" />
          <span className="px-4">Hành trình độc đáo hấp dẫn</span>
        </div>
        <div className="flex my-4 items-center px-5 justify-start">
          <HiOutlineSupport className="text-main text-2xl" />
          <span className="px-4">Bảo hiểm du lịch giá trị cao</span>
        </div>
      </div>
      {/* Ads Call */}
      <div className="sidebar-elment ads-call bg-main-light py-5 px-5 my-8">
        <h3 className="font-bold py-3 my-2 text-center text-white">
          Tư vấn 24/7
        </h3>
        <p className="font-extralight">
          Hãy liên hệ với chúng tôi để được tư vấn chi tiết và có ưu đãi giá tốt
          nhất.
        </p>
        <div className="flex my-4 items-center px-5 justify-start">
          <AiFillPhone className="text-2xl" />
          <span className="px-4">0929 01 07 09</span>
        </div>
        <div className="flex my-4 items-center px-5 justify-start">
          <FiMail className="text-2xl" />
          <span className="px-4">info@imagevietnam.com</span>
        </div>
      </div>
      {/* Recommended */}
      <RecommendBar />
    </div>
  );
};
