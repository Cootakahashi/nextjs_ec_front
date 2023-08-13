import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

export default function GridItems({ products: initialProducts, totalPages }) {
  const [products, setProducts] = useState(initialProducts);
  // const { wishlist, handleHeartClick } = useWishlist();
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [isItemsOpen, setItemsOpen] = useState(false);
  const [isSortOpen, setSortOpen] = useState(false);
  const [isStockOpen, setStockOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeAllDropdowns = () => {
    setItemsOpen(false);
    setSortOpen(false);
    setStockOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeAllDropdowns();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePageChange = async (newPage) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/products/?page=${newPage}`
    );
    const data = await res.json();
    setProducts(data.results);
    setCurrentPage(newPage);
  };
  return (
    <>
      {/* <div className="text-center py-16 ">
        {" "}
        <h1 className="text-3xl font-extrabold	py-5">NEW ARRIVAL</h1>
        <h2>新着アイテム</h2>{" "}
      </div> */}
      <header
        ref={dropdownRef}
        className="w-full text-slate-900 flex md:text-xs md:text-sm font-medium h-[46px] md:h-[55px] mb-10"
      >
        <div className="flex w-full justify-bet text-sm whitespace-nowrap border border-slate-300 font-light">
          {/* All items dropdown */}
          <div className="relative flex-grow">
            <button
              onClick={() => {
                setItemsOpen(!isItemsOpen);
                setSortOpen(false);
                setStockOpen(false);
              }}
              className="w-full transition-all h-full px-5 items-center flex justify-between border-r"
            >
              ALL ITEM <span className="">&#x25BC;</span>
            </button>
            {isItemsOpen && (
              <div
                className="absolute top-full left-0 z-10 bg-white border border-slate-300 w-full transition-opacity duration-300 opacity-0 transform translate-y-2"
                style={
                  isItemsOpen ? { opacity: 1, transform: "translateY(0)" } : {}
                }
              >
                <div className="p-3">
                  <Link href="/category/Mens" passHref>
                    <div className="my-2 hover:text-slate-700 cursor-pointer">
                      MENS
                    </div>
                  </Link>
                  <Link href="/category/Womens" passHref>
                    <div className="my-2 hover:text-slate-700 cursor-pointer">
                      LADIES
                    </div>
                  </Link>
                  <Link href="/category/Unisex" passHref>
                    <div className="my-2 hover:text-slate-700 cursor-pointer">
                      UNISEX
                    </div>
                  </Link>
                  <Link href="/category/Limited" passHref>
                    <div className="my-2 hover:text-slate-700 cursor-pointer">
                      LIMITED
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* Sort dropdown */}
          <div className="relative flex-grow">
            <button
              onClick={() => {
                setSortOpen(!isSortOpen);
                setItemsOpen(false);
                setStockOpen(false);
              }}
              className="w-full transition-all h-full px-3 md:px-5 flex justify-between items-center border-r"
            >
              新着順 <span className="ml-2">&#x25BC;</span>
            </button>
            {isSortOpen && (
              <div
                className="absolute top-full left-0 z-10 bg-white border border-slate-300 w-full transition-opacity duration-300 opacity-0 transform translate-y-2"
                style={
                  isSortOpen ? { opacity: 1, transform: "translateY(0)" } : {}
                }
              >
                <div className="p-3">
                  <Link href="/popularity" passHref>
                    <div className="my-2 hover:text-slate-700 cursor-pointer">
                      人気順
                    </div>
                  </Link>
                  <Link href="/high-price" passHref>
                    <div className="my-2 hover:text-slate-700 cursor-pointer">
                      価格が高い順
                    </div>
                  </Link>
                  <Link href="/low-price" passHref>
                    <div className="my-2 hover:text-slate-700 cursor-pointer">
                      価格が低い順
                    </div>
                  </Link>
                  <Link href="/recommended" passHref>
                    <div className="my-2 hover:text-slate-700 cursor-pointer">
                      おすすめ順
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* Stock dropdown */}
          <div className="relative flex-grow">
            <button
              onClick={() => {
                setStockOpen(!isStockOpen);
                setItemsOpen(false);
                setSortOpen(false);
              }}
              className="w-full transition-all h-full px-3 md:px-5 flex justify-between items-center"
            >
              すべて <span className="ml-2">&#x25BC;</span>
            </button>
            {isStockOpen && (
              <div
                className="absolute top-full left-0 z-10 bg-white border border-slate-300 w-full transition-opacity duration-300 opacity-0 transform translate-y-2"
                style={
                  isStockOpen ? { opacity: 1, transform: "translateY(0)" } : {}
                }
              >
                <div className="p-3">
                  <Link href="/in-stock" passHref>
                    <div className="my-2 hover:text-slate-700 cursor-pointer">
                      在庫あり
                    </div>
                  </Link>
                  <Link href="/all" passHref>
                    <div className="my-2 hover:text-slate-700 cursor-pointer">
                      すべて
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center  gap-5 md:gap-0 ">
        {products.map((product, sectionIndex) => (
          <div key={sectionIndex} className="">
            <div className="relative  text-slate-900 hover:text-slate-500">
              <Link href={`/product/${product.id}`} passHref>
                <div className="overflow-hidden">
                  {router.pathname === "/category/ranking" &&
                    product.ranking && <div>{product.ranking}</div>}
                  <img
                    className="h-[200px] md:w-[235px] md:h-[290px] hover:scale-125 transition-all duration-500"
                    src={product.image}
                    alt={`${product.title} product ${sectionIndex + 1}`}
                  />
                </div>
                <div className="absolut top- left-  py-5">
                  <span className="font-extralight text-sm">
                    {product.category.name}
                  </span>
                  {/* <h2 className="ml-1 font-bold text-sm"> {product.image} </h2> */}

                  <h2 className="ml-1 font-bold text-sm"> {product.name} </h2>
                </div>
              </Link>
            </div>
          </div>
        ))}{" "}
      </div>
      <div className="my-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              className="mx-2 border-2 border-gray-300 px-4 py-2 rounded"
              onClick={() => handlePageChange(pageNumber)}
              disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </>
  );
}
