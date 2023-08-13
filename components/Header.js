import { useState } from "react";
import Image from "next/image";
import logo from "../public/logo/transparent.png"; // ロゴのパスを適切に設定してください
import Link from "next/link";
import useWishlist from "./useWishlist";
import { useEffect } from "react";

export default function Header({ wishnum: propWishnum }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { wishlist } = useWishlist();
  const [wishnum, setWishnum] = useState(
    propWishnum !== undefined ? propWishnum : wishlist.length
  );

  // 必要であれば、wishlistの変更を検知してwishnumを更新するためのuseEffectも追加できます
  useEffect(() => {
    if (propWishnum === undefined) {
      setWishnum(wishlist.length);
    }
  }, [wishlist, propWishnum]);
  return (
    <header className="w-full bg-white bg-gray-200 flex justify-between h-16 md:h-[70px] text-sm font-light	border">
      <Link href="/" passHref>
        <Image
          src={logo}
          alt="Logo"
          width={70}
          height={50}
          className="md:ml-20"
        />{" "}
      </Link>
      <div className="hidden md:block">
        <Link href="/" passHref>
          <button className=" hover:bg-teal-300 transition-all h-full w-32 border-s-2 border-slate-200 ">
            HOME
          </button>
        </Link>
        <button className=" hover:bg-teal-300 transition-all h-full w-32 border-s-2 border-slate-200 ">
          ABOUT
        </button>
        <Link href="/allitems" passHref>
          <button className="hover:bg-teal-300 transition-all h-full w-32 border-s-2 border-slate-200">
            ITEM
          </button>
        </Link>
        <Link href="/category/ranking" passHref>
          <button className="hover:bg-teal-300 transition-all h-full w-32 border-s-2 border-slate-200">
            RANKING
          </button>
        </Link>
        <Link href="/allitems" passHref>
          <button className="hover:bg-teal-300 transition-all h-full w-32 border-s-2 border-slate-200">
            BLOG
          </button>
        </Link>
        <button className="hover:bg-teal-300 transition-all h-full w-32 border-x-2 border-slate-200">
          DOWNLOAD
        </button>
      </div>
      <div className="flex items-center mx-5 md:mr-32">
        <Link href="/wishlist" passHref>
          {wishnum > 0 ? <span className="">{wishnum}</span> : null}
          <button className="mx-2" onClick={() => setIsSearchOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </Link>
        <Link href="/login" passHref>
          <button className="mx-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
        </Link>
        <Link href="/cart" passHref>
          <button className="mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgb(84, 185, 187)"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(84, 185, 187)"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
}
