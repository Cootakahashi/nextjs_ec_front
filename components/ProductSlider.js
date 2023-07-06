import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Mousewheel } from "swiper";
import "swiper/swiper.min.css";

// Navigation and Mousewheel components for Swiper
SwiperCore.use([Navigation, Mousewheel]);

const ProductSlider = ({ products }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={5}
      navigation // Enable navigation
      mousewheel // Enable mousewheel control
      className="mySwiper"
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="p-4">
            <a href={product.url} className="block">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto"
              />
              <div className="mt-2">
                <div className="bg-red-500 text-white py-1 px-2 mb-2">
                  {product.discount}
                </div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-red-500">{product.price}</p>
                <p className="text-gray-400 text-sm">{product.variety}</p>
              </div>
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
