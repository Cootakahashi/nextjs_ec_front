import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import GridBrand from "@/components/GridBrand";
import Footer from "@/components/FooterMenu";
import Top from "@/components/Top";
import GridItems from "@/components/GridItems";
import SideBar from "@/components/SideBar";

export default function Home({
  GridBrandSections,
  SideSections,
  Gridproducts,
  totalPages,
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
      <Top image={image} name={"Ranking"} />
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

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/products/?page=1`
  );
  const data = await res.json();
  const products = data.results;
  const Gridproducts = products.filter((product) => product.ranking !== null);

  // 1から順番に並べ替え
  Gridproducts.sort((a, b) => a.ranking - b.ranking);

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

  const image = {
    src: "/cloths/wide/12.png",
    alt: "Image 1",
    width: 1020,
    height: 580,
  };
  return {
    props: {
      GridBrandSections,
      SideSections,
      Gridproducts,

      image,
    },
  };
}
