import React from "react";
import { FaPhone } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";

export const Header = () => {
  return (
    <div className="w-full bg-main">
      <div className="container mx-auto">
        <div className="menu-top flex justify-between bg-white">
          <div className="menu-top-left flex">
            <div className="phone flex">
              <FaPhone />
              <span>0929 01 07 09</span>
            </div>
            <div className="email flex">
              <AiTwotoneMail />
              <span>info@imagevietnam.com</span>
            </div>
          </div>
          <div className="menu-top-right">
            <nav>
              <ul className="flex">
                <li>Du lịch có trách nhiệm</li>
                <li>Blog & Tin Tức</li>
                <li>Về chúng tôi</li>
                <li>Liên hệ</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="menu-main flex justify-between bg-main-light">
          <div className="logo">
            <img src="" />
          </div>
          <nav>
            <ul className="flex">
              <li>Tour trong nước</li>
              <li>Tour nước ngoài</li>
              <li>Du lịch gia đình</li>
              <li>Events & Team building</li>
              <li>Combo khuyến mãi</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
