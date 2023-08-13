import Image from "next/image";
import Link from "next/link";
export default function SideBar({ sections }) {
  return (
    <>
      <div className="flex flex-col bg-white p-4 space-y-4 md:w-60">
        <div className="relative overflow-hidden mb-5">
          <Link href="/allitems" passHref>
            <Image
              className="w-full hover:scale-125 transition-all duration-500"
              src={sections[0].images[0]}
              alt="Sidebar Image"
              width={200}
              height={200}
            />
            <h1 className="absolute top-3 left-3 text-white text-3xl font-bold">
              LIMITED
            </h1>
            <span className="absolute top-12 left-2 text-white text-sm">
              限定アイテム
            </span>
          </Link>
        </div>

        <h2 className="font-bold text-base ">CATEGORYS</h2>
        <div className="flex flex-col text-sm">
          <Link
            href="/category/Mens"
            passHref
            className="py-4 px-6 text-left hover:bg-gray-300 border border-t-0 transition-all text-blue-500"
          >
            <button>MENS</button>
          </Link>

          <Link
            href="/category/Womens"
            passHref
            className="py-4 px-6 text-left hover:bg-gray-300 border border-t-0 transition-all text-red-400"
          >
            <button>LADIES</button>
          </Link>
          <Link
            href="/category/Unisex"
            passHref
            className="py-4 px-6 text-left hover:bg-gray-300 border border-t-0 transition-all text-orange-400"
          >
            <button>UNISEX</button>
          </Link>
          <Link
            href="/category/Limited"
            passHref
            className="py-4 px-6 text-left hover:bg-gray-300 border border-t-0 transition-all text-green-600"
          >
            <button>LIMITED</button>
          </Link>
        </div>
        <h2 className="font-bold text-base">NEW ARRIVAL</h2>

        <div>
          <div className="flex space-x-2 items-center border hover:bg-gray-300 overflow-hidden transition-all">
            <div className="relative w-[80px] h-[80px] overflow-hidden">
              <Image
                className="hover:scale-125 transition-all duration-500"
                src={sections[1].images[0]}
                alt="T-Shirt Image"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <button className="py-2 px- text-left text-xs">
              「ZERO」Tシャツ
            </button>
          </div>
          <div className="flex space-x-2 items-center border border-t-0 hover:bg-gray-300 overflow-hidden transition-all">
            <div className="relative w-[80px] h-[80px] overflow-hidden">
              <Image
                className="hover:scale-125 transition-all duration-500"
                src={sections[1].images[2]}
                alt="T-Shirt Image"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <button className="py-2 px- text-left text-xs">
              「FORCE」Tシャツ
            </button>
          </div>
          <div className="flex space-x-2 items-center border border-t-0 hover:bg-gray-300 overflow-hidden transition-all">
            <div className="relative w-[80px] h-[80px] overflow-hidden">
              <Image
                className="hover:scale-125 transition-all duration-500"
                src={sections[1].images[1]}
                alt="T-Shirt Image"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <button className="py-2 text-left text-xs">
              「RUMBLE」Tシャツ
            </button>
          </div>
        </div>
        <h2 className="font-bold text-base">RECCOMEND</h2>
        <div>
          <div className="flex space-x-2 items-center border hover:bg-gray-300 overflow-hidden transition-all">
            <div className="rounded-full  relative w-[60px] h-[60px] overflow-hidden m-2 py-2">
              <Image
                className="rounded-full hover:scale-125 transition-all duration-500"
                src={sections[2].images[1]}
                alt="T-Shirt Image"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <button className="py-2 text-left hover:bg-gray-300 text-xs whitespace-nowrap">
              「ZERO」Tシャツ
            </button>
          </div>
          <div className="flex space-x-2 items-center border border-t-0 hover:bg-gray-300 overflow-hidden transition-all">
            <div className="rounded-full relative w-[60px] h-[60px]  overflow-hidden m-2 py-2">
              <Image
                className="rounded-full hover:scale-125 transition-all duration-500 w-20"
                src={sections[2].images[0]}
                alt="T-Shirt Image"
                fill
              />
            </div>
            <button className="py-2 text-left hover:bg-gray-300 text-xs whitespace-nowrap">
              「FORCE」Tシャツ
            </button>
          </div>
          <div className="flex space-x-2 items-center border border-t-0 hover:bg-gray-300 overflow-hidden transition-all">
            <div className="rounded-full relative w-[60px] h-[60px] overflow-hidden m-2 py-2">
              <Image
                className="rounded-full hover:scale-125 transition-all duration-500 w-20"
                src={sections[2].images[2]}
                alt="T-Shirt Image"
                fill
              />
            </div>
            <button className="py-2 text-left hover:bg-gray-300 text-xs whitespace-nowrap">
              「RUMBLE」Tシャツ
            </button>
          </div>
        </div>
        <Link href="/category/sales_products" passHref>
          <div className="relative overflow-hidden">
            <Image
              className="md:h-[130px] w-full hover:scale-125 transition-all duration-500"
              src={sections[0].images[1]}
              alt="Sidebar Image"
              width={300}
              height={100}
            />
            <h1 className="absolute top-3 left-3 font-bold text-white text-3xl">
              50%OFF
            </h1>
            <span className="absolute top-[51px] left-3 text-white text-sm">
              限定アイテム
            </span>
          </div>
        </Link>
        <Link href="/category/recommend_products" passHref>
          <div className="relative overflow-hidden">
            <Image
              className="md:h-[130px] w-full hover:scale-125 transition-all duration-500"
              src={sections[0].images[2]}
              alt="Sidebar Image"
              width={300}
              height={200}
            />
            <span className="absolute bottom-5 left-2 text-white text-base whitespace-pre-line">
              {`女子に着て欲しい！
            可愛いTシャツ特集`}
            </span>
          </div>
        </Link>
        <Link href="/allitems" passHref>
          <div className="relative overflow-hidden">
            <Image
              className="w-full hover:scale-125 transition-all duration-500"
              src={sections[0].images[3]}
              alt="Sidebar Image"
              width={300}
              height={200}
            />
          </div>
        </Link>
      </div>
    </>
  );
}
