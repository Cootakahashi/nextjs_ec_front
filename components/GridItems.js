import Link from "next/link";

export default function GridItems({ sections }) {
  return (
    <>
      {/* <div className="text-center py-16 ">
        {" "}
        <h1 className="text-3xl font-extrabold	py-5">NEW ARRIVAL</h1>
        <h2>新着アイテム</h2>{" "}
      </div> */}
      {sections.slice(1).map((section, sectionIndex) => (
        <div key={sectionIndex} className="md:w-[715px]">
          <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center  gap-3 md:gap-0 ">
            {section.images.slice(0, 12).map((image, index) => (
              <div
                key={index}
                className="relative  text-slate-900 hover:text-slate-500"
              >
                <Link href="/item" passHref>
                  <div className="overflow-hidden">
                    <img
                      className="h-[200px] md:w-[210px] md:h-[290px] hover:scale-125 transition-all duration-500"
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
