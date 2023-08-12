/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost:8000", "127.0.0.1", "localhost"], // 開発環境でのDjangoサーバーのドメインを設定します。
  },
};
