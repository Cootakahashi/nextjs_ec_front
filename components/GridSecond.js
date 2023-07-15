export default function GridSecond({ sections }) {
  return (
    <div className="grid md:grid-cols-4 gap-4 md:mx-36 md:my-20 mx-3 mt-12">
      <div className="col-span-2 ">
        <div className="relative md:h-[260px] h-[150px] overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
            src={sections[0].images[0]}
            alt="Image 1"
          />{" "}
          <div className="absolute inset-0 bg-black bg-opacity-20" />
          <h1 className="absolute top-3 left-3 text-white text-3xl font-bold px-2 py-1">
            RANKING
          </h1>
          <span className="absolute top-[51px] left-3 text-white px-2 py-1">
            ランキングから選ぶ
          </span>
        </div>
      </div>
      <div className="col-span-2 row-span-1 row-start-3 md:row-start-auto">
        <div className="relative h-[150px] md:h-[260px] overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
            src={sections[0].images[1]}
            alt="Image 1"
          />{" "}
          <div className="absolute inset-0 bg-black bg-opacity-20" />
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
            src={sections[0].images[2]}
            alt="Image 1"
          />{" "}
          <div className="absolute inset-0 bg-black bg-opacity-20" />
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
            src={sections[0].images[3]}
            alt="Image 1"
          />{" "}
          <div className="absolute inset-0 bg-black bg-opacity-20" />
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
            src={sections[0].images[4]}
            alt="Image 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20" />

          <span className="absolute bottom-5 left-3 text-white px-2 py-1 whitespace-pre-line">
            {`STAFF厳選Tシャツ \n オススメアイテム`}
          </span>
        </div>
      </div>
      <div className="col-span-1 row-span-1">
        <div className="relative h-[150px] md:h-[260px] overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
            src={sections[0].images[5]}
            alt="Image 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20" />

          <span className="absolute top-3 left-3 text-white px-2 py-1 whitespace-pre-line">
            {`女子に来てほしい!\n可愛いTシャツ特集`}
          </span>
        </div>
      </div>
    </div>
  );
}
