export default function GridSecond({ sections }) {
  return (
    <div className="grid md:grid-cols-4 gap-4 md:mx-20 mt-20 mb-20 mx-3">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`col-span-${section.colSpan} row-span-${section.rowSpan}`}
        >
          <div className="relative h-[150px] md:h-[260px] overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
              src={section.image}
              alt={`Image ${index + 1}`}
            />
            <h1 className="absolute top-3 left-3 text-white text-3xl font-bold px-2 py-1">
              {section.title}
            </h1>
            <span className="absolute top-[51px] left-3 text-white px-2 py-1">
              {section.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
