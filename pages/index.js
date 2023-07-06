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

export default function Home() {
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
      <Header />
      {/* <SearchBar /> */}

      <Main />
      <Grid />
      <Ranking />
      <Items />
      <GridSecond />
      <GridBrand />
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
