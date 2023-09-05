import Link from "next/link";
import Image from "next/image";
export default function Items({ products }) {
  return (
    <>
      <div className="text-center md:pt-20 md:pb-12 py-10">
        <h1 className="text-xl md:text-4xl font-bold py-2 tracking-wider">
          NEW ARRIVAL
        </h1>
        <h2 className="text-sm font-light tracking-wider">新着アイテム</h2>
      </div>
      <div className="md:mx-24 mx-3">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-8 justify-items-center">
          {products.map((product, index) => (
            // <Link href={`/product/${product.id}`} passHref key={index}>
            //   <div className="relative overflow-hidden">
            //     <div className="text-slate-900 hover:text-slate-400 transition-all duration-500">
            //       <div className="overflow-hidden">
            //         <Image
            //           className="mda:w-[235px] mda:h-[300px] hover:scale-125 transition-all duration-500"
            //           src={product.image}
            //           width={350}
            //           height={550}
            //           alt={`${product.category.name} product ${index + 1}`}
            //         />
            //       </div>
            //       <div className="absolut top-0 left-0 py-5">
            //         <span className="font-extralight text-sm">
            //           {product.category.name}
            //         </span>{" "}
            //         <h2 className="ml-1 font-bold text-sm">{product.name}</h2>{" "}
            //       </div>
            //     </div>
            //   </div>
            // </Link>
            <Link href={`/product/${product.id}`} passHref key={index}>
              <div className="block relative hover:opacity-90 transition-all duration-300">
                {" "}
                {/* a タグの追加 */}
                <Image
                  className="mda:w-[235px] mda:h-[300px] transition-transform duration-500 hover:scale-105"
                  src={product.image}
                  width={350}
                  height={550}
                  alt={`${product.category.name} product ${index + 1}`}
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                  {" "}
                  {/* グラデーション背景の追加 */}
                  <span className="font-extralight text-white text-sm">
                    {" "}
                    {/* テキストの色を白に変更 */}
                    {product.category.name}
                  </span>{" "}
                  <h2 className="ml-1 font-bold text-white text-sm">
                    {product.name}
                  </h2>{" "}
                  {/* テキストの色を白に変更 */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-slate-100 bg-teal-500 hover:bg-teal-600 transition-all h-full w-52 border-s-2 border-slate-200 py-4 w-32 mt-5">
          <Link href="/allitems" passHref>
            アイテム一覧
          </Link>
        </button>
      </div>
    </>
  );
}
