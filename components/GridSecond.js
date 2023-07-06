export default function GridSecond() {
  return (
    <div className="grid md:grid-cols-4 gap-4 md:mx-20 mt-20 mb-20 mx-3">
      <div className="col-span-2 ">
        <div className="relative md:h-[260px] h-[150px] overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
            src="/cloths/wide/5.png"
            alt="Image 1"
          />
          <h1 className="absolute top-3 left-3 text-white text-3xl font-bold px-2 py-1">
            RANKING
          </h1>
          <span className="absolute top-[51px] left-3 text-white px-2 py-1">
            ランキングから選ぶ
          </span>
        </div>
      </div>
      <div className="col-span-2 row-span-1">
        <div className="relative h-[150px] md:h-[260px] overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
            src="/cloths/wide/15.png"
            alt="Image 1"
          />
          <h1 className="absolute top-3 left-3 text-white text-3xl font-bold px-2 py-1">
            BLOG
          </h1>
          <span className="absolute top-[51px] left-3 text-white px-2 py-1">
            EGO.Tのアイテム情報満載
          </span>
        </div>
      </div>
      <div className="col-span-1 row-span-1">
        <div className="relative h-[150px] md:h-[260px] overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
            src="/cloths/wide/11.png"
            alt="Image 1"
          />
          <h1 className="absolute bottom-10 md:bottom-12 left-3 text-white text-2xl md:text-3xl font-bold px-2 py-1">
            50%OFF
          </h1>
          <span className="absolute bottom-5 left-3 text-white px-2 py-1">
            売り切れ御免{" "}
          </span>
        </div>
      </div>{" "}
      <div className="col-span-1 row-span-1">
        <div className="relative h-[150px] md:h-[260px] overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
            src="/cloths/wide/20.png"
            alt="Image 1"
          />
          <h1 className="absolute top-3 left-3 text-white text-3xl font-bold px-2 py-1">
            LIMITED
          </h1>
          <span className="absolute top-[51px] left-3 text-white px-2 py-1">
            限定アイテム
          </span>
        </div>
      </div>
      <div className="col-span-1 row-span-1">
        <div className="relative h-[150px] md:h-[260px] overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
            src="/cloths/wide/16.png"
            alt="Image 1"
          />

          <span className="absolute bottom-5 left-3 text-white px-2 py-1 whitespace-pre-line">
            {`STAFF厳選Tシャツ \n オススメアイテム`}
          </span>
        </div>
      </div>
      <div className="col-span-1 row-span-1">
        <div className="relative h-[150px] md:h-[260px] overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
            src="/cloths/wide/13.png"
            alt="Image 1"
          />

          <span className="absolute top-3 left-3 text-white px-2 py-1 whitespace-pre-line">
            {`女子に来てほしい!\n可愛いTシャツ特集`}
          </span>
        </div>
      </div>
    </div>
  );
}
