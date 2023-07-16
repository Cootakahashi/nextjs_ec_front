import Link from "next/link";

export default function GridItems({ sections }) {
  return (
    <>
      {/* <div className="text-center py-16 ">
        {" "}
        <h1 className="text-3xl font-extrabold	py-5">NEW ARRIVAL</h1>
        <h2>新着アイテム</h2>{" "}
      </div> */}
      <header className="w-full text-slate-900 flex justify-center md:text-xs md:text-sm font-medium h-[46px] md:h-[55px] md:px-36; mb-10">
        <div className="flex w-full justify-between text-sm whitespace-nowrap border  border-slate-300 font-light">
          <button className="flex-grow  transition-all h-full  px-3 md:px-0">
            Mens
          </button>
          <button className="flex-grow transition-all h-full border-s-2 border-slate-300 px-3 md:px-0">
            新着順
          </button>
          <button className="flex-grow ransition-all h-full border-s-2 border-slate-300 px-3 md:px-0">
            すべて
          </button>
        </div>
      </header>
      {sections.slice(1).map((section, sectionIndex) => (
        <div key={sectionIndex} className="">
          <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center  gap-5 md:gap-0 ">
            {section.images.slice(0, 12).map((image, index) => (
              <div
                key={index}
                className="relative  text-slate-900 hover:text-slate-500"
              >
                <Link href="/item" passHref>
                  <div className="overflow-hidden">
                    <img
                      className="h-[200px] md:w-[235px] md:h-[290px] hover:scale-125 transition-all duration-500"
                      src={image}
                      alt={`${section.title} product ${index + 1}`}
                    />
                  </div>
                  <div className="absolut top- left-  py-5">
                    <span className="font-extralight text-sm">MENS</span>
                    <h2 className="ml-1 font-bold text-sm"> [TCD] Tシャツ</h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}{" "}
    </>
  );
}
