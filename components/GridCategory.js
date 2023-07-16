import Link from "next/link";
export default function Grid({ images }) {
  return (
    <div className="grid md:grid-cols-4 md:gap-4 gap-3 md:mx-36 md:mt-20 my-7 md:my-20 mx-5">
      <div className="col-span-2 row-span-2">
        <div className="relative h-[400px] overflow-hidden">
          <Link href="/allitems" passHref>
            <img
              className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
              src={images.images[0]}
              alt="Image 1"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20" />

            <h1 className="absolute top-3 left-1 text-white text-3xl font-bold px-2 py-1">
              COLLECTION
            </h1>
            <span className="absolute top-[60px] left-2 text-white px-2 py-1">
              Only1新作コレクション
            </span>
          </Link>
        </div>
      </div>
      <div className="col-span-1 grid grid-rows-2 gap-4 h-[350px] md:h-[400px]">
        <div className="relative overflow-hidden">
          <Link href="/allitems" passHref>
            <img
              className="w-500 h-500 object-cover h-full hover:scale-125 transition-all duration-500"
              src={images.images[1]}
              alt="Image 2"
            />{" "}
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            <h1 className="absolute top-3 left-0 text-white text-3xl font-bold px-2 py-1">
              50%OFF{" "}
            </h1>
            <span className="absolute top-12 left-0 text-white px-2 py-1">
              売り切れ御免
            </span>
          </Link>
        </div>
        <div className="row-span-1 h-full relative overflow-hidden">
          <Link href="/allitems" passHref>
            <img
              className="w-500 h-500 object-cover h-full hover:scale-125 transition-all duration-500"
              src={images.images[2]}
              alt="Image 3"
            />{" "}
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            {/* <h1 className="absolute top-0 left-0 text-white text-2xl font-bold px-2 py-1">
              50%OFF{" "}
            </h1> */}
            <span className="absolute top-20 md:top-32 left-0 text-white px-2 py-1 whitespace-pre-line font-bold">
              {`何着も持っていたい！\n スタッフ厳選Ｔシャツ`}
            </span>
          </Link>
        </div>
      </div>
      <div className="col-span-1 row-span-2 h-[350px] md:h-[400px]">
        <div className="row-span-2 h-full relative overflow-hidden">
          <Link href="/allitems" passHref>
            <img
              className="w-50 h-full object-cover hover:scale-125 transition-all duration-500"
              src={images.images[3]}
              alt="Image 4"
            />{" "}
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            <h1 className="absolute top-3 left-0 text-white text-3xl font-bold px-2 py-1">
              SALE
            </h1>
            <span className="absolute top-12 left-0 text-white px-2 py-1">
              これは見逃せない
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
