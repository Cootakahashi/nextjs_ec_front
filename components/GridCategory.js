export default function Grid() {
  return (
    <div className="grid md:grid-cols-4 gap-4 md:mx-20 md:mt-20 mb-20 mt-8 mx-3">
      <div className="col-span-2 row-span-2">
        <div className="relative h-[400px] overflow-hidden">
          <img
            className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
            src="/cloths/square/5.png"
            alt="Image 1"
          />
          <h1 className="absolute top-3 left-1 text-white text-3xl font-bold px-2 py-1">
            COLLECTION
          </h1>
          <span className="absolute top-[60px] left-2 text-white px-2 py-1">
            Only1新作コレクション
          </span>
        </div>
      </div>
      <div className="col-span-1 grid grid-rows-2 gap-4 h-[400px]">
        <div className="relative overflow-hidden">
          <img
            className="w-500 h-500 object-cover h-full hover:scale-125 transition-all duration-500"
            src="/cloths/wide/6.png"
            alt="Image 2"
          />
          <h1 className="absolute top-3 left-0 text-white text-3xl font-bold px-2 py-1">
            50%OFF{" "}
          </h1>
          <span className="absolute top-12 left-0 text-white px-2 py-1">
            売り切れ御免
          </span>
        </div>
        <div className="row-span-1 h-full relative overflow-hidden">
          <img
            className="w-500 h-500 object-cover h-full hover:scale-125 transition-all duration-500"
            src="/cloths/wide/7.png"
            alt="Image 3"
          />
          {/* <h1 className="absolute top-0 left-0 text-white text-2xl font-bold px-2 py-1">
              50%OFF{" "}
            </h1> */}
          <span className="absolute top-20 md:top-32 left-0 text-white px-2 py-1 whitespace-pre-line font-bold">
            {`何着も持っていたい！\n スタッフ厳選Ｔシャツ`}
          </span>
        </div>
      </div>
      <div className="col-span-1 row-span-2 h-[400px]">
        <div className="row-span-2 h-full relative overflow-hidden">
          <img
            className="w-50 h-full object-cover hover:scale-125 transition-all duration-500"
            src="/cloths/wide/8.png"
            alt="Image 4"
          />
          <h1 className="absolute top-3 left-0 text-white text-3xl font-bold px-2 py-1">
            SALE
          </h1>
          <span className="absolute top-12 left-0 text-white px-2 py-1">
            これは見逃せない
          </span>
        </div>
      </div>
    </div>
  );
}
