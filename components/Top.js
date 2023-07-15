import Image from "next/image";

export default function Top({ image }) {
  return (
    <>
      <div className="flex justify-center items-center relative h-screen -translate-y-10">
        <div className="relative">
          <Image
            className="object-cover"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
          <div className="absolute top-0 left-0 flex justify-center items-center text-white text-sm bg-teal-500 w-40 h-[55px] ">
            ALL ITEM
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
          <h1 className="text-3xl text-white font-bold text-center">
            さまざまなシーンでＴシャツを遊ぶ。
          </h1>
          <p className="text-white text-center px-4">
            着心地と作りの良さを追求しています。スタイリッシュな大人のためのシンボルとなるウェアを数多く品揃え。
            現代的な解釈を加えたベーシックなTシャツを提案します。
          </p>
        </div>
      </div>
    </>
  );
}
