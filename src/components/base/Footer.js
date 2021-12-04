import React from "react";
import { FaPhone, FaFacebook, FaYoutube } from "react-icons/fa";
import { FiInstagram, FiMapPin, FiMail } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="w-full bg-black py-5">
      <div className="container mx-auto flex item-start justify-center">
        <div className="w-1/4 px-2">
          <img className="w-40 py-2" src="img/logo.png" alt="" />
          <p className="text-white py-4">
            *Số GPKD lữ hành Quốc tế: 79-237/2014/TCDL-GP LHQT
          </p>
          <p className="text-white py-4">
            *Số GPKD: 0312432735: Sở Kế Hoạch và Đầu Tư TP Hồ Chí Minh
            (27/08/2013).
          </p>
        </div>
        <div className="w-1/4 px-8">
          <h3 className="text-white text-2xl py-6">Contact us</h3>
          <div className="phone flex items-center justify-start py-2">
            <FaPhone className="text-main text-2xl" />
            <span className="text-white mx-4">+084 929 01 07 09</span>
          </div>
          <div className="address flex items-center justify-start py-2">
            <FiMapPin className="text-main text-4xl" />
            <span className="text-white mx-4">
              22 Nguyễn Trọng Lội, Phường 4, Quận Tân Bình, TP Hồ Chí Minh
            </span>
          </div>
          <div className="email flex items-center justify-start py-2">
            <FiMail className="text-main text-2xl" />
            <span className="text-white mx-4">info@imagevietnam.com</span>
          </div>
        </div>
        <div className="w-1/4 px-8">
          <h3 className="text-white text-2xl py-6">Dịch vụ</h3>
          <nav>
            <ul>
              <li className="text-white hover:text-main py-2">
                Du lịch có trách nhiệm
              </li>
              <li className="text-white hover:text-main py-2">
                Blog & Tin tức
              </li>
              <li className="text-white hover:text-main py-2">Về chúng tôi</li>
              <li className="text-white hover:text-main py-2">Liên Hệ</li>
            </ul>
          </nav>
        </div>
        <div className="w-1/4 px-8">
          <h3 className="text-white text-2xl py-6">CSKH</h3>
          <nav>
            <ul>
              <li className="text-white hover:text-main py-2">
                Chính sách đặt tour
              </li>
              <li className="text-white hover:text-main py-2">
                Chính sách bảo mật
              </li>
            </ul>
          </nav>
          <div className="flex py-4">
            <div>
              <FaFacebook className="text-white text-4xl" />
            </div>
            <div>
              <FaYoutube className="text-white text-4xl mx-3" />
            </div>
            <div>
              <FiInstagram className="text-white text-4xl mx-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
