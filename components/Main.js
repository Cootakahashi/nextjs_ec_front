import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { Scrollbar, A11y } from "swiper";
import Link from "next/link";
// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

export default function Main({ sections }) {
  return (
    <main className="bg-gray-100">
      {/* Carousel Section */}
      <div className="relative">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {sections[0].images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="h-[550px] w-full object-cover"
                src={image}
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute w-60 md:w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl z-50 text-center">
          <h1 className="font-bold text-white fadeIn1">
            さまざまなシーンでT-シャツを選ぶ
          </h1>
          <p className="text-base	md:leading-9 mt-3 md:mt-5 text-white fadeIn2 font-light">
            Only1は、優れた品質と革新的なデザインで知られています。製品は長持ちし、ファッションのトレンドを反映している
            「Only 1」の公式販売サイトです
          </p>

          <button className="bg-teal-400 text-white w-52 md:w-auto h-[50px] md:h-auto md:px-8 md:py-3 text-base mt-5 fadeIn3 hover:bg-teal-600 transition-all">
            <Link href="/allitems" passHref>
              Womens アイテム
            </Link>
          </button>
        </div>
      </div>

      <div className="blogs md:px-10 py-2">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // pagination={{ clickable: true }}
          spaceBetween={80}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {sections[0].images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex ">
                <div className="w-full md:w-1/2 flex ">
                  {" "}
                  <div className="w-[55px] h-[55px] mt-3 rounded-full overflow-hidden translate-x-5 md:translate-x-0 ">
                    <img
                      className="w-full h-full object-cover"
                      src={image}
                      alt="Card Image"
                    />
                  </div>
                  <div className="md:px-7 py-5 text-xs w-40 translate-x-10 md:translate-x-0 md:w-auto">
                    <span className="text-xs">2022.4.24</span>
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
