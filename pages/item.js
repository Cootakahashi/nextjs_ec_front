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
import Item from "@/components/Item";
import SideBar from "@/components/SideBar";
import ScrollCart from "@/components/AddCart";

export default function Home({ data, SideSections }) {
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
      <div className="grid md:grid-cols-7 md:mt-20">
        <div className="md:col-span-2 md:ml-10 row-start-2 md:row-start-1 md:block">
          <SideBar sections={SideSections} />
        </div>
        <div className="md:col-span-5">
          <Item data={data} />
        </div>
      </div>
      <ScrollCart />
      <div className="mb-20">
        {" "}
        <Footer />
      </div>

      {/* <SearchBar /> */}

      {/* <Grid /> */}
    </div>
  );
}
export async function getStaticProps() {
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
      data,
      SideSections,
    },
  };
}
