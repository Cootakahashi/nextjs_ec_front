import Link from "next/link";

const CategorySidebar = () => {
  return (
    <div className="w-1/5 p-4">
      <div className="mb-4">
        <h3 className="font-bold mb-2">探す</h3>
        <Link href="/category/brand">
          <div className="block mb-2 cursor-pointer">ブランドから探す</div>
        </Link>
        <Link href="/category/official-shop">
          <div className="block mb-2 cursor-pointer">公式ショップから探す</div>
        </Link>
        <Link href="/category/ranking">
          <div className="block mb-2 cursor-pointer">ランキングから探す</div>
        </Link>
        <Link href="/category/sale">
          <div className="block mb-2 cursor-pointer">セール商品から探す</div>
        </Link>
        <Link href="/category/coupon">
          <div className="block mb-2 cursor-pointer">クーポン対象から探す</div>
        </Link>
        <Link href="/category/coordinated">
          <div className="block mb-2 cursor-pointer">
            コーディネートから探す
          </div>
        </Link>
      </div>
      <hr className="my-4" />
      <div className="mb-4">
        <h3 className="font-bold mb-2">カテゴリーから探す</h3>
        <Link href="/category/tops">
          <div className="block mb-2 cursor-pointer">トップス</div>
        </Link>
        <Link href="/category/jacket">
          <div className="block mb-2 cursor-pointer">ジャケット</div>
        </Link>
        <Link href="/category/pants">
          <div className="block mb-2 cursor-pointer">パンツ</div>
        </Link>
        {/* 他のカテゴリを追加 */}
      </div>
      <hr className="my-4" />
      <div className="mb-4">
        <h3 className="font-bold mb-2">お気に入り</h3>
        <Link href="/favorites/items">
          <div className="block mb-2 cursor-pointer">アイテム</div>
        </Link>
        <Link href="/favorites/brands">
          <div className="block mb-2 cursor-pointer">ブランド</div>
        </Link>
        <Link href="/favorites/shops">
          <div className="block mb-2 cursor-pointer">ショップ</div>
        </Link>
      </div>
      <hr className="my-4" />
      <div className="mb-4">{/* 広告用画像の表示 */}</div>
      <hr className="my-4" />
      <div className="mb-4">{/* ピックアップ画像の表示 */}</div>
    </div>
  );
};

export default CategorySidebar;
