import { useEffect, useState } from "react";
import Image from "next/image"; // Imageコンポーネントをインポートします。
import cookie from "cookie";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import handleCheckout from "../components/handleCheckoutStripe";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  const fetchCart = () => {
    const cookies = cookie.parse(document.cookie);
    const access = cookies.access ?? false;
    if (access === false) {
      // alert("認証情報がありません。");
      router.push("/login");

      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/cart/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data.items);
        const total = data.items.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        );
        setTotalPrice(total);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateCart = (productId, action) => {
    const data = { product_id: productId, action: action };

    const cookies = cookie.parse(document.cookie);
    const access = cookies.access ?? false;

    if (access === false) {
      alert("認証情報がありません。");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/cart/update/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // alert(data.message);
        fetchCart(); // カート更新後に再取得
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const removeAll = () => {
    // クッキーからアクセストークンを取得
    const cookies = cookie.parse(document.cookie);
    const access = cookies.access ?? false;

    if (access === false) {
      alert("認証情報がありません。");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/cart/remove-all/`, {
      method: "POST", // DELETE メソッドを使用
      headers: {
        Authorization: `Bearer ${access}`, // 認証ヘッダーを設定
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message); // 応答メッセージを表示
        fetchCart(); // カートを再取得
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto px-4 md:px-0">
      <h2 className="text-2xl font-bold mb-6">カート</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p>カートは空です</p>
              <Link href="/items">
                <div className="text-blue-500 underline">買い物を続ける</div>
              </Link>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex border rounded p-4 items-center">
                <div className="w-1/4">
                  <Image
                    src={"http://localhost:8000" + item.image_url}
                    alt={item.product.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className="w-3/4 pl-4">
                  <h3 className="text-lg font-bold">{item.product.name}</h3>
                  <p className="text-gray-600">数量: {item.quantity}</p>
                  <p className="text-gray-600">
                    価格: ${item.product.price.toFixed(2)}
                  </p>
                  <div className="mt-2">
                    <button
                      onClick={() => updateCart(item.product.id, "decrease")}
                      className="text-red-500 px-2 py-1 border border-red-500 rounded"
                    >
                      -
                    </button>
                    <button
                      onClick={() => updateCart(item.product.id, "increase")}
                      className="text-green-500 px-2 py-1 border border-green-500 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => updateCart(item.product.id, "remove")}
                      className="text-gray-500 px-2 py-1 border border-gray-500 rounded"
                    >
                      削除
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
          <button
            onClick={removeAll}
            className="text-white bg-red-500 px-4 py-2 rounded mt-4"
          >
            全て削除
          </button>
        </div>
        <div className="col-span-1 mt-8 md:mt-0">
          <div className="border p-4 rounded">
            <p className="text-xl mb-4">合計金額: ${totalPrice.toFixed(2)}</p>
            <Link href="/OrderConfirmation">
              <button
                // onClick={() => handleCheckout(Math.floor(totalPrice))}
                className="bg-blue-500 text-white px-4 py-2 mb-2 w-full rounded"
              >
                レジに進む
              </button>
            </Link>
            <button className="bg-gray-500 text-white px-4 py-2 w-full rounded">
              <Link href="/">買い物を続ける</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
