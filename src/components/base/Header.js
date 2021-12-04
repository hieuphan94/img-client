import React from "react";
import { FaPhone } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-full fixed z-30">
      <div className="mx-auto">
        <div className="menu-top flex justify-between py-2 px-7 bg-white">
          <div className="menu-top-left flex">
            <div className="phone flex items-center">
              <FaPhone className="text-paraGraph" />
              <span className="mx-5 text-paraGraph">0929 01 07 09</span>
            </div>
            <div className="email flex items-center">
              <AiTwotoneMail className="text-paraGraph" />
              <span className="mx-5 text-paraGraph">info@imagevietnam.com</span>
            </div>
          </div>
          <div className="menu-top-right">
            <nav>
              <ul className="flex">
                <li className="text-paraGraph mx-4 hover:text-main-light">
                  Du lịch có trách nhiệm
                </li>
                <li className="text-paraGraph mx-4 hover:text-main-light">
                  Blog & Tin Tức
                </li>
                <li className="text-paraGraph mx-4 hover:text-main-light">
                  Về chúng tôi
                </li>
                <li className="text-paraGraph hover:text-main-light">
                  Liên hệ
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="menu-main flex justify-between items-center py-2 px-7 bg-transparentMenu">
          <div className="logo">
            <Link to="/">
              <img src="/img/logo.png" className="w-40" alt="" />
            </Link>
          </div>
          <nav>
            <ul className="flex">
              <li className="mx-4 font-semibold text-menuColor hover:text-main">
                Tour trong nước
              </li>
              <li className="mx-4 font-semibold text-menuColor hover:text-main">
                Tour nước ngoài
              </li>
              <li className="mx-4 font-semibold text-menuColor hover:text-main">
                Du lịch gia đình
              </li>
              <li className="mx-4 font-semibold text-menuColor hover:text-main">
                Events & Team building
              </li>
              <li className="font-semibold text-menuColor hover:text-main">
                Combo khuyến mãi
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
