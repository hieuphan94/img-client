import React from "react";
import { IoFlash, IoTimeOutline } from "react-icons/io5";

export const Box = ({ item }) => {
  // let iconStyles = { color: "red", fontSize: "1.5em" };
  return (
    <div className="bg-blackThin mx-5 rounded-md hover:bg-main-light">
      <div className="box-image h-96">
        <a href={item.url}>
          <img
            className="h-full object-cover rounded-md"
            src={item.img}
            alt=""
          />
        </a>
      </div>
      <div className="box-content py-4 px-8">
        <div className="box-title flex justify-between py-2">
          <IoFlash className="text-main text-4xl" />
          <h3 className="font-bold text-2xl">{item.title}</h3>
        </div>
        <div className="box-date flex justify-between py-2">
          <IoTimeOutline className="text-main text-4xl" />
          <h3>{item.day}</h3>
        </div>
        <div className="box-price flex flex-col items-end py-2">
          <span>Giá từ</span>
          <span className="text-3xl text-main-dark text-bold">
            {item.price} đ
          </span>
        </div>
        <div className="box-cat absolute top-2/4 mx-3.5">
          <button className="bg-main px-3 rounded-sm py-2 text-white">
            {item.category}
          </button>
        </div>
      </div>
    </div>
  );
};
