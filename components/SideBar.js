import Image from "next/image";

export default function SideBar({ sections }) {
  return (
    <div className="flex flex-col bg-white p-4 space-y-4 w-60">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2 className="font-bold text-base ">{section.title}</h2>

          {section.images.map((image, imageIndex) => (
            <div key={imageIndex} className="relative overflow-hidden mb-5">
              <Image
                className="w-full hover:scale-125 transition-all duration-500"
                src={image}
                alt="Sidebar Image"
                width={200}
                height={200}
              />
              {/* Add dynamic titles or other components here */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
