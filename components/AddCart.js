import { useEffect, useState } from "react";

export default function ScrollCart() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY >= 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-0 w-full z-20 flex justify-between items-center bg-white p-4 transition-opacity duration-500 md:px-32 px-4 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-lg">
        ¥2500 <span className="text-sm font-light">(税別)</span>
      </p>
      <button
        className="px-4 py-2 text-white flex"
        style={{ backgroundColor: "rgb(84, 185, 187)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke=""
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        Add to Cart
      </button>
    </div>
  );
}
