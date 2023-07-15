export default function Ranking({ sections }) {
  return (
    <div className="your-class py-20">
      <header className="w-full text-slate-200 flex justify-center text-xs md:text-sm font-medium	h-[51px]">
        <div className="">
          <button className="bg-teal-400 hover:bg-teal-400 transition-all h-full md:w-80 border-s-2 border-slate-200 px-3 md:px-0">
            人気アイテム
          </button>
          <button className="bg-slate-900 hover:bg-teal-400 transition-all h-full md:w-80 border-s-2 border-slate-200 px-3 md:px-0">
            スタッフオススメ
          </button>
          <button className="bg-slate-900 hover:bg-teal-400 transition-all h-full md:w-80 border-s-2 border-slate-200 px-3 md:px-0">
            セールアイテム
          </button>
        </div>
      </header>
      {sections.slice(1).map((section, sectionIndex) => (
        <div key={sectionIndex} className="mx-aut py-8">
          <div className="md:flex justify-center gap-8 hidden">
            {section.images.slice(0, 4).map((image, index) => (
              <div key={index} className="relative overflow-hidden ">
                <div className="overflow-hidden">
                  <img
                    className="w-[180px] h-[220px] hover:scale-125 transition-all duration-500"
                    src={image}
                    alt={`${section.title} product ${index + 1}`}
                  />
                </div>
                <div className="absolute top-0 left-0">
                  <div className="flex justify-center text-white items-center text-sm bg-gray-400 w-8 h-8 ">
                    {index + 1}
                  </div>
                </div>
                <div className="absolut top- left- text-white hover:text-black  transition-all duration-500 py-5">
                  <span className="font-extralight text-sm">MENS</span>
                  <h2 className="ml-1"> [TCD] Tシャツ</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}{" "}
      {sections.slice(1).map((section, sectionIndex) => (
        <div key={sectionIndex} className="mx-aut py-8">
          <div className="justify-center gap-8 md:hidden flex mx-1">
            {section.images.slice(0, 2).map((image, index) => (
              <div key={index} className="relative overflow-hidden ">
                <div className="overflow-hidden">
                  <img
                    className="w-[180px] h-[220px] hover:scale-125 transition-all duration-500"
                    src={image}
                    alt={`${section.title} product ${index + 1}`}
                  />
                </div>
                <div className="absolute top-0 left-0">
                  <div className="flex justify-center text-white items-center text-sm bg-gray-400 w-8 h-8 ">
                    {index + 1}
                  </div>
                </div>
                <div className="absolut top- left- text-white hover:text-black  transition-all duration-500 py-5">
                  <span className="font-extralight text-sm">MENS</span>
                  <h2 className="ml-1"> [TCD] Tシャツ</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}{" "}
    </div>
  );
}
