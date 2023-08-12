import React, { useEffect, useState } from "react";
import cookie from "cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import useWishlist from "../components/useWishlist";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import GridBrand from "@/components/GridBrand";
import Footer from "@/components/FooterMenu";
function Wishlist({ GridBrandSections }) {
  const router = useRouter();
  //   const [wishlist, setWishlist] = useState([]);
  const { wishlist, handleHeartClick, setWishlist } = useWishlist();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (wishlist && wishlist.length > 0) {
        console.log("HI");
        console.log(wishlist);
        const productIds = wishlist.map((item) => item.product_id);
        const fetchedProducts = await Promise.all(
          productIds.map((productId) =>
            fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/api/auth/products/${productId}/`
            ).then((res) => res.json())
          )
        );

        setProducts(fetchedProducts);
      }
    };

    fetchProducts();
  }, [wishlist]);

  return (
    <>
      {" "}
      <SearchBar />
      <Header />
      <div className="container mx-auto max-w-5xl p-4">
        <h1 className="text-center my-4 text-2xl font-bold">My Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="border p-4 rounded transition hover:shadow-lg"
            >
              {" "}
              <Link href={`/product/${product.id}`} passHref>
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="responsive"
                  width={200}
                  height={200}
                />
                <h3 className="mt-4 text-xl">{product.name}</h3>
              </Link>
              <button onClick={() => handleHeartClick(product)}>
                {wishlist.some((item) => item.product_id === product.id) ? (
                  <span style={{ color: "red" }}>❤️</span>
                ) : (
                  <span>🤍</span>
                )}
              </button>
              <p className="text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <GridBrand sections={GridBrandSections} />
      <Footer />
    </>
  );
}

export default Wishlist;

export async function getStaticProps() {
  const GridBrandSections = [
    {
      title: "RANKING",
      subtitle: "ランキングから選ぶ",
      image: "/cloths/wide/5.png",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      title: "BLOG",
      subtitle: "EGO.Tのアイテム情報満載",
      image: "/cloths/wide/15.png",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      title: "50%OFF",
      subtitle: "売り切れ御免",
      image: "/cloths/wide/11.png",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "LIMITED",
      subtitle: "限定アイテム",
      image: "/cloths/wide/20.png",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "STAFF厳選Tシャツ",
      subtitle: "オススメアイテム",
      image: "/cloths/wide/16.png",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "女子に来てほしい!",
      subtitle: "可愛いTシャツ特集",
      image: "/cloths/wide/13.png",
      colSpan: 1,
      rowSpan: 1,
    },
  ];
  return {
    props: {
      GridBrandSections,
    },
  };
}
