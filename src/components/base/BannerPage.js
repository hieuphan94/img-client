import React from "react";

export const BannerPage = () => {
  const content = {
    img: "img/banner-page.jpeg",
    text: "Text",
  };
  return (
    <div
      className="banner-page w-full"
      style={{ backgroundImage: `url(${content.img})` }}
    >
      <div className="mx-auto py-64">
        <h3 className="text-center text-5xl font-bold text-white">
          {content.text}
        </h3>
      </div>
    </div>
  );
};
