import Link from "next/link";
export default function Items() {
  const sections = [
    {
      title: "New Arrivals",
      images: Array.from({ length: 4 }, (_, i) => `/canva/middle/${i + 1}.png`),
    },
    {
      title: "Ranking",
      images: Array.from(
        { length: 8 },
        (_, i) => `/cloths/square/${i + 1}.png`
      ),
    },
  ];
  return (
    <>
      <div className="text-center py-8 ">
        {" "}
        <h1 className="text-2xl font-extrabold	py-2">NEW ARRIVAL</h1>
        <h2 className="text-sm">新着アイテム</h2>{" "}
      </div>
      {sections.slice(1).map((section, sectionIndex) => (
        <div key={sectionIndex} className="md:mx-16">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-2 mx-2 justify-items-center  gap- ">
            {section.images.slice(0, 8).map((image, index) => (
              <div key={index} className="relative overflow-hidden ">
                <div className="text-slate-900 hover:text-slate-400 transition-all duration-500">
                  <div className="overflow-hidden">
                    <img
                      className="w-[180px] h-[180px] md:h-[225px] hover:scale-125 transition-all duration-500"
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
