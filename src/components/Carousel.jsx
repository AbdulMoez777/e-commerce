import React, { useContext, useEffect } from "react";
import { Datacontext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Carousel() {
  const { data, fetchAllProducts } = useContext(Datacontext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SampleNextArrow = (props) => {
    const { onClick } = props; 
    return (
      <div
        onClick={onClick}
       
        className="absolute right-3 md:right-7 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      >
        <AiOutlineArrowRight className="text-4xl text-black hover:text-gray-700 transition-colors bg-amber-400 rounded-full p-2 shadow-lg" />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        
        className="absolute left-3 md:left-7 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      >
        <AiOutlineArrowLeft className="text-4xl text-black hover:text-gray-700 transition-colors bg-amber-400 rounded-full p-2 shadow-lg" />
      </div>
    );
  };
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  if (!data || data.length === 0) {
    return (
      <div className="h-[600px] flex justify-center items-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white text-2xl font-bold">
        Loading...
      </div>
    );
  }

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
                {/* Left Side: Text Box */}
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
      </Slider>
    </div>
  );
}

export default Carousel;

