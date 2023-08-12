import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import Main from "../components/Main";
import ImageComponent from "../components/ImageComponent";
import ProductSlider from "../components/ProductSlider";
import CategorySidebar from "../components/CategorySidebar";
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
  console.log(NewProductSections);
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
      <SearchBar />
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
      {/* <div className="p-20 ml-40 translate-x-20">
        <ProductSlider products={products} />
      </div>
      <div className="-translate-y-80 translate-x-5">
        {" "}
        <CategorySidebar />
      </div>
      <div className="p-20 ml-40 translate-x-20 -translate-y-80">
        <ProductSlider products={products} />
        <ProductSlider products={products} />
      </div> */}

      {/* <FeaturedCategories />
      <FeaturedProducts /> */}
    </div>
  );
}

export async function getStaticProps() {
  const gridImages = {
    images: [
      "/cloths/square/5.png",
      "/cloths/wide/6.png",
      "/cloths/wide/7.png",
      "/cloths/wide/8.png",
    ],
  };

  const mainSections = [
    {
      title: "New Arrivals",
      images: Array.from({ length: 5 }, (_, i) => `/canva/middle/${i + 1}.png`),
    },
    {
      title: "Restocked",
      images: Array.from({ length: 5 }, (_, i) => `/cloths/wide/${i + 1}.png`),
    },
    {
      title: "Ranking",
      images: Array.from({ length: 5 }, (_, i) => `/cloths/wide/${i + 1}.png`),
    },
    // Add more sections as needed
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
  const NewProductSections = products
    .filter((product) => product.new_product == true)
    .slice(0, 8); //
  const GridSecondSections = [
    {
      title: "GridSecond",
      images: [
        "/cloths/wide/5.png",
        "/cloths/wide/15.png",
        "/cloths/wide/11.png",
        "/cloths/wide/20.png",
        "/cloths/wide/16.png",
        "/cloths/wide/13.png",
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
