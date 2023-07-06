import Image from "next/image";

export default function ImageComponent({ src, alt, layout }) {
  return (
    <div
      className={`flex justify-center ${
        layout === "wide" ? "w-full" : "w-1/2"
      }`}
    >
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
}
