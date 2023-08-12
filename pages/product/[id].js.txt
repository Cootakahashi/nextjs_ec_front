import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image"; // Imageコンポーネントをインポートします。
import cookie from "cookie";
import Link from "next/link";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Footer from "@/components/FooterMenu";
import Item from "@/components/Item";
import SideBar from "@/components/SideBar";
import ScrollCart from "@/components/AddCart";

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/products/`
  );
  const data = await res.json();
  const products = data.results; // results キーから製品を取得

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false, // 未知のパスは404ページを表示
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/products/${params.id}`
  );
  const product = await res.json();
  const data = {
    // データの例
    title: "GLAMOUR Tシャツ",
    images: [
      "/cloths/square/5.png",
      "/cloths/square/5.png",
      "/cloths/square/5.png",
    ],
    // その他のデータ...
  };

  const SideSections = [
    {
      title: "CATEGORYS",
      images: [
        "/cloths/square/11.png",
        "/cloths/square/7.png",
        "/cloths/square/6.png",
        "/cloths/square/5.png",
      ],
    },
    {
      title: "NEW ARRIVAL",
      images: [
        "/cloths/square/13.png",
        "/cloths/square/14.png",
        "/cloths/square/15.png",
      ],
    },
    {
      title: "RECCOMEND",
      images: [
        "/cloths/square/9.png",
        "/cloths/square/6.png",
        "/cloths/square/19.png",
      ],
    },
  ];
  return {
    props: {
      product,
      data,
      SideSections,
    },
  };
}

function ItemDetail({ product, SideSections, data }) {
  const addToCart = () => {
    const data = { product_id: product.id };

    // クッキーからアクセストークンを取得
    const cookies = cookie.parse(document.cookie);
    const access = cookies.access ?? false;

    if (access === false) {
      alert("認証情報がありません。");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/add_to_cart/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access}`, // 認証ヘッダーを設定
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        console.log("daaa");
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <SearchBar />
        <Header />
        <div className="grid md:grid-cols-7 md:mt-20">
          <div className="md:col-span-2 md:ml-10 row-start-2 md:row-start-1 md:block">
            <SideBar sections={SideSections} />
          </div>
          <div className="md:col-span-5">
            <Item data={data} product={product} />
          </div>
        </div>

        <ScrollCart price={Math.floor(product.price)} product={product} />
        <div className="mb-20">
          {" "}
          <Footer />
        </div>
        {/* <SearchBar /> */}
        {/* <Grid /> */}
      </div>

      {/* ボタンを追加 */}
      {/* <button
        onClick={addToCart}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button> */}
      <Link href="/items">買い物を続ける</Link>
    </div>
  );
}

export default ItemDetail;
