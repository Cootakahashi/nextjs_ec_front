export default function SearchBar() {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex items-center justify-center w-full max-w-md mx-auto">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          {/* <svg
            class="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background:new 0 0 56.966 56.966;"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
          </svg> */}
        </button>
      </div>
    </div>
  );
}
