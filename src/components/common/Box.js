import React from "react";
import { IoFlash, IoTimeOutline } from "react-icons/io5";

export const Box = ({ item }) => {
  let iconStyles = { color: "red", fontSize: "1.5em" };
  return (
    <div className="">
      <div className="box-image">
        <a href="#">
          <img
            className="h-96"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB"
          />
        </a>
      </div>
      <div className="box-content">
        <div className="box-title flex justify-between">
          <IoFlash style={iconStyles} />
          <h3 className="font-bold">{item.title}</h3>
        </div>
        <div className="box-date flex justify-between">
          <IoTimeOutline />
          <h3>{item.day}</h3>
        </div>
        <div className="box-price flex flex-col items-end">
          <span>Gia tu</span>
          <span>{item.price} đ</span>
        </div>
        <div className="box-cat absolute top-2/3 mx-3.5">
          <button className="bg-main px-3 rounded-sm">
            <a className="text-white" href="#">
              {item.cat}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
