import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt- bg-gray-200 md:px-20 md:h-96 text-sm">
        <div className="md:border-s-2 border-slate-300 py-20 px-5">
          <h2 className="font-bold text-teal-400 ">ITEM</h2>
          <ul className="flex flex-col gap-2 font-light mt-3">
            <li>MENS</li>
            <li>LADIES</li>
            <li>UNISEX</li>
            <li>LIMITED</li>
          </ul>
        </div>
        <div className="md:border-s-2 border-slate-300 py-20 px-5">
          <h2 className="font-bold text-teal-400">MENU</h2>
          <ul className="flex flex-col gap-2 font-light mt-3">
            <li>お知らせ</li>
            <li>アバウト</li>
            <li>ランキング</li>
            <li>コレクション</li>
            <li>ブログ</li>
          </ul>
        </div>
        <div className="md:border-s-2 border-slate-300 py-20 px-5">
          <h2 className="font-bold text-teal-400">ACCOUNT</h2>
          <ul className="flex flex-col gap-2 font-light mt-3">
            <li>会員登録</li>
            <li>マイ アカウント</li>
            <li>ログイン</li>
            <li>カートを見る</li>
            <li>チェックアウトする</li>
          </ul>
        </div>
        <div className="md:border-s-2 border-slate-300 py-20 px-5">
          <h2 className="font-bold text-teal-400">SUPPORT</h2>
          <ul className="flex flex-col gap-2 font-light mt-3">
            <li>ご利用ガイド</li>
            <li>ご利用規約</li>
            <li>特定商取引法に関する表示</li>
            <li>プライバシーポリシー</li>
            <li>お問い合わせ</li>
          </ul>
        </div>
      </div>
      <footer className="flex items-center justify-center justify-items-stretch text-slate-100 body-font bg-black md:h-16 h-12">
        <span className="flex icons mr-aut md:ml-40 md:-translate-x-80 -translate-y-16 bg-black translate-x-20 md:translate-y-0 px-3 py-1">
          <a className="text-slate-100">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-slate-100">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-slate-100">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-slate-100">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
        <p className="flex justify-center  text-xs text-text-slate-100 sm:mt-0 mx-auto text-center -translate-x-16 md:-translate-x-0">
          © 2023 —
          <a
            href="https://twitter.com/"
            className="text-slate-100 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Only1 Tokyo Japan
          </a>
        </p>
      </footer>
    </>
  );
}
