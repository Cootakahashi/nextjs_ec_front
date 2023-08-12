import Image from "next/image";
import Link from "next/link";
import handleCheckout from "./handleCheckoutStripe";
export default function Items({ data, product }) {
  const price = Math.floor(product.price);

  return (
    <>
      <div className="text-2xl md:my-10 my-5 mx-5 ">
        <h1 className="font-bold">{product.name}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-teal-400 mt-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
      <div className="md:flex mx-5 ">
        <div className="relative">
          <Image
            className="object-cover"
            src={product.image}
            alt="clothes"
            width={620}
            height={480}
          />
          <div
            className="absolute top-0 left-0 flex justify-center items-center text-white text-sm bg-red-700 md:h-[111px] md:w-[111px] h-[80px] w-[80px] "
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          >
            <span
              className="md:mb-8 md:mr-5 mr-5 mb-12 text-xs md:text-base font-bold"
              style={{
                transform: "rotate(-45deg)",
              }}
            >
              SOLD OUT
            </span>
          </div>
        </div>
        <Image
          className="object-cover md:ml-5 w-24 h-24 md:w-40 md:h-40 mt-3 md:mt-auto"
          src={data.images[1]}
          alt="clothes other"
          width={140}
          height={240}
        />
      </div>
      <div className="mx-5">
        <p className="whitespace-pre-line mt-8 font-light">
          {product.description}
          {/* {`Tシャツは、着心地と合わせやすさが決め手。普段使いや、軽いスポーツ時にも使えますし、
          年間を通してお使いいただけるアイテムのひとつです。
          
          定番ゆえに様々なカラーや柄物のアイテムを複数お持ちの方も多いのではないでしょうか。
          
          上質なコットン生地を使用したEGO-Tは、肌触りが良くタフなので、ヘビロテアイテムとしてオススメです。`} */}
        </p>
        <div>
          <span className="flex icons md:mt-3 mt-8">
            <a className="text-slate-800">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-slate-800">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-slate-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-slate-800">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
        <div className="mt-3">
          <span className="font-light text-xs">カテゴリー :</span>
          <span className="font-light text-xs text-teal-400">
            NEW <span className="text-black">,</span>LADIES
          </span>
        </div>
        <div className="pricebo border pt-12 pb-10 px-16 md:w-[400px] mt-8 border-gray-300 my-5">
          <span className="font-bold text-2xl mr-3">
            ¥{Math.floor(product.price)}
          </span>
          <span className="font-extralight">(税別)</span>
          <p className="font-extralight mt-5">在庫　在庫あり</p>
          <button
            className="bg-cyan-300 text-white px-16 py-4 text-sm mt-5 hover:bg-cyan-700 transition-all"
            onClick={() => handleCheckout(price)}
          >
            今すぐ購入
          </button>
        </div>
      </div>
    </>
  );
}
