import Image from "next/image";

export default function SideBar({ sections }) {
  return (
    <>
      <div className="flex flex-col bg-white p-4 space-y-4 w-60">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-bold text-base">{section.title}</h2>
            <div>
              {section.images.map((imageSrc) => (
                <div
                  key={imageSrc}
                  className="flex space-x-2 items-center border hover:bg-gray-300 overflow-hidden transition-all"
                >
                  <Image
                    className="hover:scale-125 transition-all duration-500 w-20"
                    src={imageSrc}
                    alt="T-Shirt Image"
                    width={50}
                    height={50}
                  />
                  <button className="py-2 px-4 text-left text-xs">
                    Tシャツ
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
