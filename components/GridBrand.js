// import logo from "/logo/transparent.png"; // ロゴのパスを適切に設定してください
import Image from "next/image";
import Link from "next/link";
export default function GridBrand({ sections }) {
  return (
    <div className="grid grid-cols-6 mx- gap-2 mt-10 md:mt-32">
      <header className="col-span-6 text-center text-md font-bold text-slate-100 bg-black translate-y-2 h-[51px] md:h-[55px] flex items-center justify-center font-light	">
        <a className="mr-3 text-slate-100">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <h1>Only 1 INSTAGRAM</h1>
      </header>
      <div className="col-span-full grid grid-cols-3 md:grid-cols-6">
        <div className="overflow-hidden">
          <Image
            src="/cloths/new_square/1.jpg"
            width={300}
            height={300}
            alt="brand image"
          />
        </div>
        <div className="overflow-hidden">
          <Image
            src="/cloths/new_square/7.jpg"
            width={300}
            height={300}
            alt="brand image"
          />
        </div>
        <div className="overflow-hidden">
          <Image
            src="/cloths/new_square/8.jpg"
            width={300}
            height={300}
            alt="brand image"
          />
        </div>
        <div className="overflow-hidden">
          <Image
            src="/cloths/new_square/9.jpg"
            width={300}
            height={300}
            alt="brand image"
          />
        </div>
        <div className="overflow-hidden">
          <Image
            src="/cloths/new_square/10.jpg"
            width={300}
            height={300}
            alt="brand image"
          />
        </div>
        <div className="overflow-hidden">
          <Image
            src="/cloths/new_square/11.jpg"
            width={300}
            height={300}
            alt="brand image"
          />
        </div>
      </div>
      <div className="col-span-full flex justify-center items-center">
        <Link href="/" passHref>
          <Image
            src="/logo/transparent.png"
            alt="Logo"
            width={130}
            height={130}
          />{" "}
        </Link>
      </div>
      <p className="col-span-full text-center -translate-y-5 text-xs mb-5">
        イケてる、オリジナルTシャツショップ Only1.
      </p>
    </div>
  );
}
