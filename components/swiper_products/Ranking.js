import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import React, { useEffect, useState } from "react";

SwiperCore.use([Navigation, Pagination]);

export default function Ranking({ Rankingsections, onSelectComponent }) {
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
      <header className="w-full text-slate-200 flex justify-content md:text-xs md:text-sm font-medium h-[46px] md:h-[55px] md:px-36 px-3 ">
        <div className="flex w-full justify-between text-sm whitespace-nowrap">
          <button
            className="flex-grow bg-teal-400 hover:bg-teal-400 transition-all h-full border-s-2 border-slate-200 px-3 md:px-0"
            onClick={() => onSelectComponent("Ranking")}
          >
            人気アイテム
          </button>
          <button
            className="flex-grow bg-slate-900 hover:bg-teal-400 transition-all h-full border-s-2 border-slate-200 px-3 md:px-0"
            onClick={() => onSelectComponent("Recommend")}
          >
            スタッフオススメ
          </button>
          <button
            className="flex-grow bg-slate-900 hover:bg-teal-400 transition-all h-full border-s-2 border-slate-200 px-3 md:px-0"
            onClick={() => onSelectComponent("Sales")}
          >
            セールアイテム
          </button>
        </div>
      </header>
      <div className="md:py-10 md:px-36 px-3 relative">
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
        <button className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2">
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
          {Rankingsections &&
            Rankingsections.slice(0, 12).map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={`/product/${item.id}`} passHref>
                  <div
                    className={`relative overflow-hidden ${
                      index % 4 !== 3 ? "pr-3" : ""
                    }`}
                  >
                    <div className="overflow-hidden">
                      <Image
                        className="h-80 hover:scale-125 transition-all duration-500"
                        src={item.image}
                        width={500}
                        height={200}
                        alt={`${item.name}`}
                      />
                    </div>
                    <div className="absolute top-0 left-0">
                      <div className="flex justify-center text-white items-center text-sm bg-gray-400 w-8 h-8 ">
                        {index + 1}
                      </div>
                    </div>
                    <div className="mt-2 text-black">
                      <span className="font-extralight text-sm">
                        {item.category.name.toUpperCase()}
                      </span>
                      <h2 className="ml-1"> {item.name}</h2>
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
