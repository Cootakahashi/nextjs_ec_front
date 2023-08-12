import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function GridItems({ products: initialProducts, totalPages }) {
  const [products, setProducts] = useState(initialProducts);
  // const { wishlist, handleHeartClick } = useWishlist();
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

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
      <header className="w-full text-slate-900 flex justify-center md:text-xs md:text-sm font-medium h-[46px] md:h-[55px] md:px-36; mb-10">
        <div className="flex w-full justify-between text-sm whitespace-nowrap border  border-slate-300 font-light">
          <button className="flex-grow  transition-all h-full  px-3 md:px-0">
            Mens
          </button>
          <button className="flex-grow transition-all h-full border-s-2 border-slate-300 px-3 md:px-0">
            新着順
          </button>
          <button className="flex-grow ransition-all h-full border-s-2 border-slate-300 px-3 md:px-0">
            すべて
          </button>
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
