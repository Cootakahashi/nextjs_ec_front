import Image from "next/image";
export default function SideBar() {
  return (
    <>
      <div className="flex flex-col bg-white p-4 space-y-4 w-60">
        <div className="relative overflow-hidden mb-5">
          <Image
            className="w-full hover:scale-125 transition-all duration-500"
            src="/cloths/square/11.png"
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
        </div>

        <h2 className="font-bold text-base ">CATEGORYS</h2>
        <div className="flex flex-col text-sm">
          <button className="py-4 px-6 text-left hover:bg-gray-300 border transition-all text-blue-400">
            MENS
          </button>
          <button className="py-4 px-6 text-left hover:bg-gray-300 border border-t-0 transition-all text-red-400">
            LADIES
          </button>
          <button className="py-4 px-6 text-left hover:bg-gray-300 border border-t-0 transition-all text-orange-400">
            UNISEX
          </button>
          <button className="py-4 px-6 text-left hover:bg-gray-300 border border-t-0 transition-all text-green-500">
            LIMITED
          </button>
        </div>
        <h2 className="font-bold text-base">NEW ARRIVAL</h2>

        <div>
          <div className="flex space-x-2 items-center border hover:bg-gray-300 overflow-hidden transition-all">
            <Image
              className="hover:scale-125 transition-all duration-500 w-20"
              src="/cloths/square/7.png"
              alt="T-Shirt Image"
              width={50}
              height={50}
            />
            <button className="py-2 px-4 text-left text-xs">
              「ZERO」Tシャツ
            </button>
          </div>
          <div className="flex space-x-2 items-center border border-t-0 hover:bg-gray-300 overflow-hidden transition-all">
            <Image
              className="hover:scale-125 transition-all duration-500 w-20"
              src="/cloths/square/6.png"
              alt="T-Shirt Image"
              width={50}
              height={50}
            />
            <button className="py-2 px-4 text-left text-xs">
              「FORCE」Tシャツ
            </button>
          </div>
          <div className="flex space-x-2 items-center border border-t-0 hover:bg-gray-300 overflow-hidden transition-all">
            <Image
              className="hover:scale-125 transition-all duration-500 w-20"
              src="/cloths/square/5.png"
              alt="T-Shirt Image"
              width={50}
              height={50}
            />
            <button className="py-2 px-4 text-left text-xs">
              「RUMBLE」Tシャツ
            </button>
          </div>
        </div>
        <h2 className="font-bold text-base">RECCOMEND</h2>
        <div>
          <div className="flex space-x-2 items-center border hover:bg-gray-300 overflow-hidden transition-all">
            <div className="rounded-full w-20 overflow-hidden">
              <Image
                className="rounded-full hover:scale-125 transition-all duration-500 w-full"
                src="/cloths/square/13.png"
                alt="T-Shirt Image"
                width={50}
                height={50}
              />
            </div>
            <button className="py-2 px-4 text-left hover:bg-gray-300 text-xs whitespace-nowrap">
              「ZERO」Tシャツ
            </button>
          </div>
          <div className="flex space-x-2 items-center border border-t-0 hover:bg-gray-300 overflow-hidden transition-all">
            <div className="rounded-full w-20 overflow-hidden">
              <Image
                className="rounded-full hover:scale-125 transition-all duration-500 w-20"
                src="/cloths/square/14.png"
                alt="T-Shirt Image"
                width={50}
                height={50}
              />
            </div>
            <button className="py-2 px-4 text-left hover:bg-gray-300 text-xs whitespace-nowrap">
              「FORCE」Tシャツ
            </button>
          </div>
          <div className="flex space-x-2 items-center border border-t-0 hover:bg-gray-300 overflow-hidden transition-all">
            <div className="rounded-full w-20 overflow-hidden">
              <Image
                className="rounded-full hover:scale-125 transition-all duration-500 w-20"
                src="/cloths/square/15.png"
                alt="T-Shirt Image"
                width={50}
                height={50}
              />
            </div>
            <button className="py-2 px-4 text-left hover:bg-gray-300 text-xs whitespace-nowrap">
              「RUMBLE」Tシャツ
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <Image
            className="w-full hover:scale-125 transition-all duration-500"
            src="/cloths/square/9.png"
            alt="Sidebar Image"
            width={200}
            height={200}
          />
          <h1 className="absolute top-3 left-3 font-bold text-white text-3xl">
            50%OFF
          </h1>
          <span className="absolute top-[51px] left-3 text-white text-sm">
            限定アイテム
          </span>
        </div>
        <div className="relative overflow-hidden">
          <Image
            className="w-full hover:scale-125 transition-all duration-500"
            src="/cloths/square/6.png"
            alt="Sidebar Image"
            width={200}
            height={200}
          />
          <span className="absolute bottom-5 left-2 text-white text-base whitespace-pre-line">
            {`女子に着て欲しい！
            可愛いTシャツ特集`}
          </span>
        </div>
        <div className="relative overflow-hidden">
          <Image
            className="w-full hover:scale-125 transition-all duration-500"
            src="/cloths/square/19.png"
            alt="Sidebar Image"
            width={200}
            height={200}
          />
        </div>
      </div>
    </>
  );
}
