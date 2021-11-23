import React from "react";
import { FaPhone } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full absolute bottom-0 bg-main">
      <div className="container mx-auto flex align-top">
        <div className="w-1/4">
          <img src="" />
          <p>*Số GPKD lữ hành Quốc tế: 79-237/2014/TCDL-GP LHQT</p>
          <p>
            *Số GPKD: 0312432735: Sở Kế Hoạch và Đầu Tư TP Hồ Chí Minh
            (27/08/2013).
          </p>
        </div>
        <div className="w-1/4">
          <h3>Contact us</h3>
          <div className="phone flex">
            <FaPhone />
            <span>+084 929 01 07 09</span>
          </div>
          <div className="address flex">
            <FaPhone />
            <span>
              22 Nguyễn Trọng Lội, Phường 4, Quận Tân Bình, TP Hồ Chí Minh
            </span>
          </div>
          <div className="email flex">
            <FaPhone />
            <span>info@imagevietnam.com</span>
          </div>
        </div>
        <div className="w-1/4">
          <h3>Dịch vụ</h3>
        </div>
        <div className="w-1/4">
          <h3>CSKH</h3>
        </div>
      </div>
    </div>
  );
};
