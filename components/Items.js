import Link from "next/link";
export default function Items({ sections }) {
  return (
    <>
      <div className="text-center md:pt-20 md:pb-12 py-10">
        {" "}
        <h1 className="text-xl md:text-4xl font-bold		py-2 tracking-wider	">
          NEW ARRIVAL
        </h1>
        <h2 className="text-sm font-light tracking-wider		">新着アイテム</h2>{" "}
      </div>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="md:mx-36 mx-5">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-2 justify-items-center  ">
            {section.images.slice(0, 8).map((image, index) => (
              <div key={index} className="relative overflow-hidden ">
                <div className="text-slate-900 hover:text-slate-400 transition-all duration-500">
                  <div className="overflow-hidden">
                    <img
                      className="md:w-[235px] md:h-[300px] hover:scale-125 transition-all duration-500"
                      src={image}
                      alt={`${section.title} product ${index + 1}`}
                    />
                  </div>
                  <div className="absolut top- left- py-5">
                    <span className="font-extralight text-sm">MENS</span>
                    <h2 className="ml-1 font-bold text-sm"> [TCD] Tシャツ</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}{" "}
      <div className="flex justify-center">
        <button className="text-slate-100 bg-teal-500 hover:bg-teal-600 transition-all h-full w-52 border-s-2 border-slate-200 py-4 w-32 mt-5">
          <Link href="/allitems" passHref>
            アイテム一覧
          </Link>
        </button>
      </div>
    </>
  );
}
