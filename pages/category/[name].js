import Link from "next/link";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Top from "@/components/Top";
import GridBrand from "@/components/GridBrand";
import GridItems from "@/components/GridItems";
import SideBar from "@/components/SideBar";
import Footer from "@/components/FooterMenu";

function CategoryPage({
  name,
  GridBrandSections,
  SideSections,
  Gridproducts,
  totalPages,
  image,
}) {
  return (
    <div>
      <h1>{Gridproducts[0].category.name} カテゴリの商品一覧</h1>
      <ul></ul>

      <div>
        <SearchBar />
        <Header />
        <Top image={image} name={Gridproducts[0].category.name} />
        <div className="mx-5 md:mx-36">
          <div className="grid md:grid-cols-8 grid-rows-">
            <div className="md:col-span-2 hidde md:block row-start-2 md:row-start-1">
              <SideBar sections={SideSections} />
            </div>
            <div className="md:col-span-6 ">
              <GridItems products={Gridproducts} totalPages={totalPages} />
            </div>
          </div>
        </div>
        <GridBrand sections={GridBrandSections} />

        <Footer />
        {/* <SearchBar /> */}

        {/* <Grid /> */}
      </div>
    </div>
  );
}

export default CategoryPage;

export async function getServerSideProps(context) {
  const { name } = context.params;

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

  // カテゴリーに関連する製品を取得
  const resCategoryProducts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/category/${name}/`
  );

  if (!resCategoryProducts.ok) {
    throw new Error("Network response was not ok");
  }

  const dataCategoryProducts = await resCategoryProducts.json();
  const Gridproducts = dataCategoryProducts.results;
  // const dataGridProducts = await resCategoryProducts.json();
  // // グリッド製品を取得
  // const resGridProducts = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/auth/products/?page=1`
  // );
  // const dataGridProducts = await resGridProducts.json();
  // const Gridproducts = dataGridProducts.results;

  const pageSize = 12;
  const totalPages = Math.ceil(dataCategoryProducts.count / pageSize);

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
      // products,
      Gridproducts,
      totalPages,
      image,
    },
  };
}
