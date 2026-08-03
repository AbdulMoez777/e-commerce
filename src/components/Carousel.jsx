import React, { useContext, useEffect } from "react";

import { Datacontext } from "../context/DataContext";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Carousel() {
  const { data, fetchAllProducts } = useContext(Datacontext);

  console.log(data);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  var settings = {
    dots: true,

    infinite: true,

    speed: 500,

    slidesToShow: 1,

    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
            >
              
              <div className="max-w-6xl mx-auto flex justify-between items-center h-[600px] px-4">
                {/* Left Side: Text Box (Restricted width to keep it neat) */}
                <div className="max-w-lg space-y-6">
                  <p className="text-yellow-500 font-semibold text-sm">
                    Powering your world with the ultimate tech essentials.
                  </p>
                  <h1 className="text-white text-4xl md:text-5xl font-bold uppercase line-clamp-2">
                    {item.title}
                  </h1>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-6 py-2 rounded-md font-bold transition-colors">
                    Shop Now
                  </button>
                </div>

                {/* Right Side Image */}
                <div className="bg-white rounded-full h-[350px] w-[350px] md:h-[400px] md:w-[400px] flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.6)] hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-3/4 w-3/4 object-contain"
                  />
                </div>
              </div>
            </div>
          );
        })}

        <div>
          <h3>1</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
