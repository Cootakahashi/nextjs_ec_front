export default function Ranking({ sections }) {
  return (
    <div className="your-class md:py-28 pt-10">
      <header className="w-full text-slate-200 flex justify-content md:text-xs md:text-sm font-medium h-[46px] md:h-[55px] md:px-36 px-3 ">
        <div className="flex w-full justify-between text-sm whitespace-nowrap">
          <button className="flex-grow bg-teal-400 hover:bg-teal-400 transition-all h-full border-s-2 border-slate-200 px-3 md:px-0">
            人気アイテム
          </button>
          <button className="flex-grow bg-slate-900 hover:bg-teal-400 transition-all h-full border-s-2 border-slate-200 px-3 md:px-0">
            スタッフオススメ
          </button>
          <button className="flex-grow bg-slate-900 hover:bg-teal-400 transition-all h-full border-s-2 border-slate-200 px-3 md:px-0">
            セールアイテム
          </button>
        </div>
      </header>
      {sections.slice(1).map((section, sectionIndex) => (
        <div key={sectionIndex} className="md:py-10 ">
          <div className="md:flex justify-center gap-7 hidden">
            {section.images.slice(0, 4).map((image, index) => (
              <div key={index} className="relative overflow-hidden ">
                <div className="overflow-hidden">
                  <img
                    className="w-[230px] h-[300px] hover:scale-125 transition-all duration-500"
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
        <div key={sectionIndex} className="py-10">
          <div className="justify-center gap-7 md:hidden flex mx-3">
            {section.images.slice(0, 2).map((image, index) => (
              <div key={index} className="relative overflow-hidden ">
                <div className="overflow-hidden">
                  <img
                    className="w-[165px] h-[200px] hover:scale-125 transition-all duration-500"
                    src={image}
                    alt={`${section.title} product ${index + 1}`}
                  />
                </div>
                <div className="absolute top-0 left-0">
                  <div className="flex justify-center text-white items-center text-sm bg-gray-400 w-8 h-8 ">
                    {index + 1}
                  </div>
                </div>
                <div className="absolut top- left- text-white hover:text-black  transition-all duration-500 py-3">
                  <span className="font-extralight text-sm">MENS</span>
                  <h2 className="ml-1 font-semibold"> [TCD] Tシャツ</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}{" "}
    </div>
  );
}
