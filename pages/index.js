import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

import Main from "../components/Main";
import Grid from "../components/GridCategory";
import Ranking from "../components/swiper_products/Ranking";
import Items from "../components/Items";
import GridSecond from "@/components/GridSecond";
import GridBrand from "@/components/GridBrand";
import Footer from "@/components/FooterMenu";
import Recommend from "@/components/swiper_products/Recommend";
import Sales from "@/components/swiper_products/Sales";
import { useState } from "react";
export default function Home({
  mainSections,
  gridImages,
  Rankingsections,
  Recommendsections,
  Salessections,
  GridSecondSections,
  GridBrandSections,
  NewProductSections,
}) {
  const [selectedComponent, setSelectedComponent] = useState("Ranking");
  const handleSelectComponent = (component) => {
    setSelectedComponent(component);
  };
  const squareImages = Array.from(
    { length: 14 },
    (_, i) => `/canva/square/${i + 1}.png`
  );
  const wideImages = Array.from(
    { length: 14 },
    (_, i) => `/cloths/wide/${i + 1}.png`
  );
  const products = Array.from({ length: 20 }, (_, i) => ({
    url: `https://example.com/product${i + 1}`,
    image: `/cloths/square/${i + 1}.png`,
    name: `Product ${i + 1}`,
    category: `Category ${i + 1}`,
    price: `¥${(i + 1) * 1000}`,
    variety: `${i + 1} types`,
    discount: `¥${(i + 1) * 100} OFF`,
  }));

  return (
    <div>
      {/* <SearchBar /> */}
      <Header />
      <Main sections={mainSections} />
      <Grid images={gridImages} />

      {selectedComponent === "Ranking" && (
        <Ranking
          Rankingsections={Rankingsections}
          onSelectComponent={handleSelectComponent}
        />
      )}
      {selectedComponent === "Recommend" && (
        <Recommend
          Recommendsections={Recommendsections}
          onSelectComponent={handleSelectComponent}
        />
      )}
      {selectedComponent === "Sales" && (
        <Sales
          Salessections={Salessections}
          onSelectComponent={handleSelectComponent}
        />
      )}

      <Items products={NewProductSections} />
      <GridSecond sections={GridSecondSections} />
      <GridBrand sections={GridBrandSections} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const gridImages = {
    images: [
      "/cloths/new_square/1.jpg",
      "/cloths/new_wide/2.jpg",
      "/cloths/new_wide/3.jpg",
      "/cloths/new_wide/4.jpg",
    ],
  };

  const mainSections = [
    {
      title: "New Arrivals",
      images: Array.from({ length: 5 }, (_, i) => `/canva/head/${i + 1}.jpg`),
    },
    {
      title: "New Arrivals responsive",
      images_responsive: Array.from(
        { length: 5 },
        (_, i) => `/cloths/new_vertical/${i + 5}.jpg`
      ),
    },
  ];

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/products/?page=1`
  );
  const data = await res.json();
  const products = data.results;
  const Rankingsections = products.filter(
    (product) => product.ranking !== null
  );
  const Recommendsections = products.filter(
    (product) => product.recommend == true
  );
  const Salessections = products.filter(
    (product) => product.sales_discount == true
  );

  // 1から順番に並べ替え
  Rankingsections.sort((a, b) => a.ranking - b.ranking);

  // const NewProductSections = products
  //   .filter((product) => product.new_product == true)
  //   .slice(0, 8); //
  const NewProductSections = Array.from({ length: 8 }).map((_, index) => ({
    id: index + 1,
    image: `/cloths/items/${index + 2}.jpg`,
    category: {
      name: `Category ${index + 1}`,
    },
    name: `Clothing Item ${index + 1}`,
  }));
  const GridSecondSections = [
    {
      title: "GridSecond",
      images: [
        "/canva/head/11.jpg",
        "/cloths/new_square/6.jpg",
        "/cloths/new_square/7.jpg",
        "/cloths/new_square/8.jpg",
        "/cloths/new_square/9.jpg",
        "/cloths/new_square/10.jpg",
      ],
    },
  ];
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
      mainSections,
      NewProductSections,
      gridImages,
      Rankingsections,
      Recommendsections,
      Salessections,
      GridSecondSections,
      GridBrandSections,
    },
  };
}
