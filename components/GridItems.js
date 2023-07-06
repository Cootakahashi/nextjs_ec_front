import Link from "next/link";
export default function GridItems() {
  const sections = [
    {
      title: "New Arrivals",
      images: Array.from({ length: 4 }, (_, i) => `/canva/middle/${i + 1}.png`),
    },
    {
      title: "Ranking",
      images: Array.from(
        { length: 12 },
        (_, i) => `/cloths/square/${i + 1}.png`
      ),
    },
  ];

  return (
    <>
      {/* <div className="text-center py-16 ">
        {" "}
        <h1 className="text-3xl font-extrabold	py-5">NEW ARRIVAL</h1>
        <h2>新着アイテム</h2>{" "}
      </div> */}
      {sections.slice(1).map((section, sectionIndex) => (
        <div key={sectionIndex} className="w-[715px]">
          <div className="grid grid-cols-3 justify-items-center  gap- ">
            {section.images.slice(0, 12).map((image, index) => (
              <div
                key={index}
                className="relative  text-slate-900 hover:text-slate-500"
              >
                <Link href="/item" passHref>
                  <div className="overflow-hidden">
                    <img
                      className="w-[210px] h-[290px] hover:scale-125 transition-all duration-500"
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
