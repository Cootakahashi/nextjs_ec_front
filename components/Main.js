import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { Scrollbar, A11y } from "swiper";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

export default function Main({ sections }) {
  console.log(sections);
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    // 初期の画面サイズに基づいて状態をセット
    setIsDesktop(window.innerWidth >= 768);

    // 画面サイズが変わるたびに状態を更新するリスナーを追加
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // コンポーネントのクリーンアップ時にリスナーを削除
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const imagesToShow =
    isDesktop === null
      ? []
      : isDesktop
      ? sections[0].images
      : sections[1]?.images_responsive;

  console.log(imagesToShow);

  return (
    <main className="bg-gray-100">
      {/* Carousel Section */}
      <div className="relative ">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <div>
            {imagesToShow &&
              imagesToShow.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[540px] w-[960px] md:h-[500px] md:w-full">
                    <Image
                      src={image}
                      width={isDesktop ? 1790 : 540}
                      height={isDesktop ? 810 : 960}
                      alt="main slide model picture"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
        <div className="absolute w-80  md:w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl z-50 text-center">
          <h1 className="font-bold text-white fadeIn1 md:whitespace-normal whitespace-pre-line  ">
            {`さまざまなシーンで \n T-シャツを選ぶ`}
          </h1>
          <p className="text-base	md:leading-9 mt-3 md:mt-5 text-white fadeIn2 font-light">
            Only1は、優れた品質と革新的なデザインで知られています。ファッションのトレンド
            「Only 1」の公式販売サイトです
          </p>

          <button className="bg-teal-500 hover:bg-teal-600  text-white w-52 md:w-auto h-[50px] md:h-auto md:px-8 md:py-3 text-base mt-5 fadeIn3 hover:bg-teal-600 transition-all">
            <Link href="/allitems" passHref>
              Womens アイテム
            </Link>
          </button>
        </div>
      </div>

      <div className="blogs md:px-28 py-1">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // pagination={{ clickable: true }}
          spaceBetween={1000}
          slidesPerView={1}
          loop={true} // ここにloopプロパティを追加します
          speed={1900} // ここにspeedプロパティを追加します
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {sections[0].images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex ">
                <div className="w-full md:w-1/2 flex ml-8 ">
                  {" "}
                  <div className="w-[62px] h-[62px] mt-3 rounded-full overflow-hidden translate-x-5 md:translate-x-0 ">
                    <img
                      className="w-full h-full object-cover"
                      src={image}
                      alt="Card Image"
                    />
                  </div>
                  <div className="md:px-7 py-5 text-xs w-40 translate-x-10 md:translate-x-0 md:w-auto">
                    <span className="text-xs">2023.8.24</span>
                    <p>私たちのECサイトが遂にリニューアルしました</p>
                  </div>
                </div>{" "}
                <div className="hidden md:w-1/2 md:flex ">
                  {" "}
                  <div className="w-[55px] h-[55px] mt-3 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={image}
                      alt="Card Image"
                    />
                  </div>
                  <div className="px-7 py-5 text-xs w-40 translate-x-10 md:translate-x-0 md:w-auto">
                    <span className="text-xs">2022.4.24</span>
                    <p>私たちのECサイトが遂にリニューアルしました</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
