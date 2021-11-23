import React from "react";
import Carousel from "react-elastic-carousel";
import { Box } from "./Box";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const items = [
  { id: 1, title: "item #1", day: "2 day", price: 34, cat: "combo" },
  { id: 2, title: "item #2", day: "2 day", price: 34, cat: "combo" },
  { id: 3, title: "item #3", day: "2 day", price: 34, cat: "combo" },
  { id: 4, title: "item #4", day: "2 day", price: 34, cat: "combo" },
  { id: 5, title: "item #5", day: "2 day", price: 34, cat: "combo" },
];

export const BoxCarousel = () => {
  return (
    <div className="container mx-auto">
      <Carousel breakPoints={breakPoints}>
        {items.map((item) => (
          <Box key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};
