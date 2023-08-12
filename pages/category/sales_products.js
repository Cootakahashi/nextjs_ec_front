import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import GridBrand from "@/components/GridBrand";
import Footer from "@/components/FooterMenu";
import Top from "@/components/Top";
import GridItems from "@/components/GridItems";
import SideBar from "@/components/SideBar";

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/sales-products/`
  );
  const data = await res.json();
  const products = data.results; // results キーから製品を取得
  const Gridproducts = products.filter(
    (product) => product.sales_discount !== null
  );

  console.log(products);

  const image = {
    src: "/cloths/wide/12.png",
    alt: "Image 1",
    width: 1020,
    height: 580,
  };
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

  const SideSections = [
    {
      title: "CATEGORYS",
      images: [
        "/cloths/square/13.png",
        "/cloths/wide/9.png",
        "/cloths/wide/6.png",
        "/cloths/square/19.png",
      ],
    },
    {
      title: "NEW ARRIVAL",
      images: [
        "/cloths/square/19.png",
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
      Gridproducts,
      image,
      SideSections,
      GridBrandSections,
    },
  };
}

function SalesDiscountProducts({
  Gridproducts,
  image,
  SideSections,
  GridBrandSections,
}) {
  return (
    <div>
      <SearchBar />
      <Header />
      <Top image={image} name={"Sales"} />
      <div className="mx-5 md:mx-36">
        <div className="grid md:grid-cols-8 grid-rows-">
          <div className="md:col-span-2 hidde md:block row-start-2 md:row-start-1">
            <SideBar sections={SideSections} />
          </div>
          <div className="md:col-span-6 ">
            <GridItems products={Gridproducts} />
          </div>
        </div>
      </div>
      <GridBrand sections={GridBrandSections} />

      <Footer />
      {/* <SearchBar /> */}

      {/* <Grid /> */}
    </div>
  );
}

export default SalesDiscountProducts;
