export default function SearchBar() {
  return (
    <div className="w-full bg-gray-200 md:font-extralight	">
      <div className="flex items-center justify-between w-full max-w-m h-12 md:h-16 md:px-24 md:px-3 px-5 font-light	">
        <div className="hidden md:block text-light text-xs md:text-sm whitespace-nowrap">
          さまざまなシーンでTシャツを遊ぶ。オリジナルTシャツショップ Only One.
        </div>
        <div className="md:hidden text-light text-xs md:text-sm whitespace-nowrap">
          オリジナルTシャツショップ Only One.
        </div>
        <div className="md:pr-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 md:w-6 md:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
