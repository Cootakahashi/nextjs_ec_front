import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cookie from "cookie";
import { useRouter } from "next/router";
import useWishlist from "../components/useWishlist";

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/products/?page=1`
  );
  const data = await res.json();
  const products = data.results;

  const pageSize = 12; // 1ページあたりのアイテム数
  const totalPages = Math.ceil(data.count / pageSize);

  return {
    props: {
      products,
      totalPages,
    },
  };
}

function Products({ products: initialProducts, totalPages }) {
  const [products, setProducts] = useState(initialProducts);
  const { wishlist, handleHeartClick } = useWishlist();

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = async (newPage) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/products/?page=${newPage}`
    );
    const data = await res.json();
    setProducts(data.results);
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map((product, index) => (
        <div key={index} className="mt-8">
          {/* {product.id} */}
          {/* {product.name} */}
          {/* {product.image}
          {product.price} */}
          <button onClick={() => handleHeartClick(product)}>
            {wishlist.some((item) => item.product_id === product.id) ? (
              <span style={{ color: "red" }}>❤️</span>
            ) : (
              <span>🤍</span>
            )}
          </button>
          <div className="w-40 h-40 relative">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 480px, 800px" // このプロパティを追加
              priority
            />
          </div>
          <Link href={`/product/${product.id}`} passHref>
            {product.name}
          </Link>

          {/* <p className="mt-8">{product.description}</p> */}
        </div>
      ))}
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
    </div>
  );
}

export default Products;
