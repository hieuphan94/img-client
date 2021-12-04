import React from "react";
import { AiFillLike, AiFillHeart } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";

export const Intro = () => {
  return (
    <div className="w-full bg-main">
      <div className="mx-auto flex justify-evenly py-7">
        <div className="w-1/4">
          <div className="intro-heading flex justify-evenly items-center">
            <AiFillLike className="text-4xl text-white" />
            <h3 className="text-center text-white text-xl font-bold py-3">
              Lựa chọn chất lượng
            </h3>
          </div>
          <p className="font-light text-white p-1">
            Tất cả đối tác và dịch vụ đều được chọn lọc, thẩm định chặt chẽ ...
          </p>
        </div>
        <div className="w-1/4">
          <div className="intro-heading flex justify-evenly items-center">
            <AiFillHeart className="text-4xl text-white" />
            <h3 className="text-center text-white text-xl font-bold py-3">
              Lắng nghe và đồng hành
            </h3>
          </div>
          <p className="font-light text-white p-1">
            Tư vấn tận tâm, thấu hiểu mong muốn của khách hàng...
          </p>
        </div>
        <div className="w-1/4">
          <div className="intro-heading flex justify-evenly items-center">
            <FaHandshake className="text-5xl text-white" />
            <h3 className="text-center text-white text-xl font-bold py-3">
              Du lịch có trách nhiệm
            </h3>
          </div>
          <p className="font-light text-white p-1">
            Bảo vệ môi trường, văn hóa và thúc đẩy kinh tế địa phương...
          </p>
        </div>
      </div>
    </div>
  );
};
