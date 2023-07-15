import Image from "next/image";

export default function Top({ image }) {
  return (
    <>
      <div className="flex justify-center items-center relative mb-20 md:h-screen md:-translate-y-10">
        <div className="md:relative">
          <Image
            className="md:object-cover"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
          <div className="absolute top-0 left-0 flex justify-center items-center text-white text-xs w-28 h-[39px] md:text-sm bg-teal-500 md:w-40 md:h-[55px]  ">
            ALL ITEM
          </div>
        </div>
        <div className="absolute top-32 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
          <h1 className="text-md md:text-3xl text-white font-bold text-center">
            さまざまなシーンでＴシャツを遊ぶ。
          </h1>
          <p className="text-white text-center md:px-4 text-sm">
            着心地と作りの良さを追求しています。スタイリッシュな大人のためのシンボルとなるウェアを数多く品揃え。
          </p>
        </div>
      </div>
    </>
  );
}
