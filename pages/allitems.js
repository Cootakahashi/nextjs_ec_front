import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import Main from "../components/Main";
import ImageComponent from "../components/ImageComponent";
import ProductSlider from "../components/ProductSlider";
import CategorySidebar from "../components/CategorySidebar";
import Grid from "../components/GridCategory";
import Ranking from "../components/Ranking";
import Items from "../components/Items";
import GridSecond from "@/components/GridSecond";
import GridBrand from "@/components/GridBrand";
import Footer from "@/components/FooterMenu";
import Top from "@/components/Top";
import GridItems from "@/components/GridItems";
import SideBar from "@/components/SideBar";

export default function Home({
  GridBrandSections,
  SideSections,
  GridSections,
  image,
}) {
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
      <Top image={image} />
      <div className="md:ml-40 mx-3 md:mx-auto">
        <div className="md:grid md:grid-cols-8 ">
          <div className="md:col-span-2 hidden md:block">
            <SideBar sections={SideSections} />
          </div>
          <div className="md:col-span-6 ">
            <GridItems sections={GridSections} />
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

  const GridSections = [
    {
      title: "New Arrivals",
      images: Array.from({ length: 4 }, (_, i) => `/canva/middle/${i + 1}.png`),
    },
    {
      title: "Ranking",
      images: Array.from(
        { length: 12 },
        (_, i) => `/cloths/square/${i + 1}.png`
      ),
    },
  ];
  const image = {
    src: "/cloths/wide/5.png",
    alt: "Image 1",
    width: 1020,
    height: 580,
  };
  return {
    props: {
      GridBrandSections,
      SideSections,
      GridSections,
      image,
    },
  };
}
