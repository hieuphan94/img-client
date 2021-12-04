import React from "react";

export const RecommendBar = () => {
  const products = [
    {
      id: 1,
      title: "Vung troi binh yen",
      img: "/img/banner-page.jpeg",
      price: 5290000,
      category: "Tour Mien Trung",
    },
    {
      id: 2,
      title: "Vung troi binh yen",
      img: "/img/banner-page.jpeg",
      price: 5290000,
      category: "Tour Mien Trung",
    },
    {
      id: 3,
      title: "Vung troi binh yen",
      img: "/img/banner-page.jpeg",
      price: 5290000,
      category: "Tour Mien Trung",
    },
    {
      id: 4,
      title: "Vung troi binh yen",
      img: "/img/banner-page.jpeg",
      price: 5290000,
      category: "Tour Mien Trung",
    },
  ];
  const Item = ({ item }) => {
    return (
      <div>
        <div className="flex items-start">
          <div className="w-1/3 p-3">
            <img src={item.img} alt="" className="w-full" />
          </div>
          <div className="w-2/3 p-3">
            <h5 className="font-medium">{item.title}</h5>
            <button className="bg-main my-2 p-2">{item.category}</button>
            <p>
              Giá từ <span className="text-main">{item.price}</span>đ
            </p>
          </div>
        </div>
        <hr className="text-blackThin" />
      </div>
    );
  };
  return (
    <div className="">
      <h3 className="font-bold py-3 my-2 text-center text-black">
        Gợi ý cho bạn
      </h3>
      {products.map((el) => {
        return <Item key={el.id} item={el} />;
      })}
    </div>
  );
};
