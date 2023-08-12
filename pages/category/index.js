import Link from "next/link";

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/categories/`
    );

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    const categories = data.results;

    return {
      props: {
        categories,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        categories: [], // エラーが発生した場合のデフォルト値
      },
    };
  }
}

// 他の部分は同じ

function Home({ categories }) {
  return (
    <div>
      <h1>商品カテゴリ一覧</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {/* 各カテゴリ名にリンクを設定し、カテゴリの商品一覧ページへ遷移 */}
            <Link href={`/category/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
