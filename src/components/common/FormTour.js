import React from "react";
import { AiFillTags } from "react-icons/ai";

export const FormTour = () => {
  const product = {
    title: "Tour Tay Bac",
    price: 3970000,
  };
  return (
    <div className="px-5 py-5 rounded-md shadow-lg">
      <h3 className="text-main text-center py-5">{product.title}</h3>
      <div className="price flex px-2 m-2">
        <AiFillTags className="text-main text-3xl" />
        <p className="px-5">
          Giá từ <span className="text-main">{product.price}đ</span>
        </p>
      </div>
      <div className="form">
        <input
          type="text"
          className="rounded-md border-2 border-blackThin py-1 w-full px-2 m-2"
          placeholder="Họ và tên"
        />
        <input
          type="text"
          className="rounded-md border-2 border-blackThin py-1 w-full px-2 m-2"
          placeholder="Số di động"
        />
        <input
          type="text"
          className="rounded-md border-2 border-blackThin py-1 w-full px-2 m-2"
          placeholder="Địa chỉ Email"
        />
        <div className="flex px-2 m-2 justify-between items-center">
          <span className="text-menuColor">Ngày khởi hành</span>
          <input
            type="date"
            className="rounded-md border-2 border-blackThin py-1 px-1"
          />
        </div>
        <textarea
          className="w-full border-2 rounded-md border-blackThin p-2 m-2"
          placeholder="Yêu cầu cụ thể"
        ></textarea>
        <div className="flex py-4 m-2">
          <input type="checkbox" />
          <p className="px-5">
            Tôi đã đọc và đồng ý với
            <span className="text-main"> Điều khoản đặt Tour</span> và
            <span className="text-main"> Chính sách bảo mật</span>
          </p>
        </div>
        <button className="bg-main w-full text-white rounded-md py-4">
          Gửi yêu cầu
        </button>
      </div>
    </div>
  );
};
