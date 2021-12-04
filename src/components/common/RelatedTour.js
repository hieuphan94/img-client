import React from "react";
import Carousel from "react-elastic-carousel";
import { Box } from "./Box";

export const RelatedTour = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
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
  return (
    <div className="container mx-auto">
      <Carousel breakPoints={breakPoints} className="py-5">
        {products.map((item) => (
          <Box key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};
