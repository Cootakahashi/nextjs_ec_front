import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import React, { useEffect, useState } from "react";

SwiperCore.use([Navigation, Pagination]);

export default function Recommend({ Recommendsections, onSelectComponent }) {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [slidesPerGroup, setSlidesPerGroup] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesPerView(2);
        setSlidesPerGroup(2);
      } else {
        setSlidesPerView(4);
        setSlidesPerGroup(4);
      }
    };

    handleResize(); // コンポーネントがマウントされたときに実行
    window.addEventListener("resize", handleResize); // ウィンドウがリサイズされるたびに実行

    return () => {
      window.removeEventListener("resize", handleResize); // コンポーネントがアンマウントされるときにリスナーを削除
    };
  }, []);
  return (
    <div className="your-class md:py-28 pt-10 relative">
      {" "}
      {/* relative追加 */}
      <header className="w-full text-slate-200 flex justify-content md:text-xs md:text-sm font-medium h-[46px] md:h-[55px] md:px-36 px-1 ">
        <div className="flex w-full justify-between text-sm whitespace-nowrap">
          <button
            className="flex-grow bg-slate-900 hover:bg-teal-400 transition-all h-full border-s-2 border-slate-200 px-1 md:px-0"
            onClick={() => onSelectComponent("Ranking")}
          >
            人気アイテム
          </button>
          <button
            className="flex-grow bg-teal-400 hover:bg-teal-400 transition-all h-full border-s-2 border-slate-200 px-1 md:px-0"
            onClick={() => onSelectComponent("Recommend")}
          >
            スタッフオススメ
          </button>
          <button
            className="flex-grow bg-slate-900 hover:bg-teal-400 transition-all h-full border-s-2 border-slate-200 px-1 md:px-0"
            onClick={() => onSelectComponent("Sales")}
          >
            セールアイテム
          </button>
        </div>
      </header>
      <div className="md:py-10 md:px-36 relative">
        {" "}
        {/* relative追加 */}
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="swiper-button-next-custom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>{" "}
        <Swiper
          className="swiper-container mx-auto"
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop
          slidesPerView={slidesPerView}
          slidesPerGroup={slidesPerGroup}
          speed={800} // この値を変更して、スライドの速度を調整します。値が大きいほど遅くなります。
          effect="slide" // オプションとして 'fade', 'cube', 'coverflow', 'flip' などを使用できます。
        >
          {Recommendsections &&
            Recommendsections.slice(0, 12).map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={`/product/${item.id}`} passHref>
                  <div
                    className={`relative overflow-hidden ${
                      index % 4 !== 3 ? "pr-3 sm:pr-4" : ""
                    } group mb-4 sm:mb-6 mx-2`}
                  >
                    <div className="overflow-hidden relative h-[210px] sm:h-[270px] w-[240px] sm:w-[270px] mt-8 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
                        src="/cloths/square/1.png"
                        alt={`${item.name}`}
                        fill
                      />
                    </div>
                    <div
                      className={`absolute top-4 left-4 text-white rounded-full w-8 h-8 flex items-center justify-center 
        ${
          index === 0
            ? "bg-gold"
            : index > 0 && index < 6
            ? "bg-silver"
            : "bg-copper"
        }`}
                    >
                      {index + 1}
                    </div>

                    {/* Text Section */}
                    <div className="mt-4 px-2 sm:px-4">
                      <span className="block font-medium text-sm text-slate-100 capitalize">
                        {item.category.name}
                      </span>
                      <h2 className="text-lg font-semibold mt-1 sm:text-xl text-gray-200">
                        {" "}
                        {item.name}
                      </h2>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
