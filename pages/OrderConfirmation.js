import { useEffect, useState } from "react";
import Image from "next/image";
import cookie from "cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import handleCheckout from "../components/handleCheckoutStripe";

export default function OrderConfirmation() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingInformation, setShippingInformation] = useState(null);
  const router = useRouter();

  // 配送情報の取得
  const fetchShippingInfo = async () => {
    const cookies = cookie.parse(document.cookie);
    const access = cookies.access ?? false;
    if (access === false) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/shipping-information/`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setShippingInformation(data); // 既存情報をstateにセット
      }
    } catch (error) {
      console.error(error);
    }
  };

  // カートの取得
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
    fetchShippingInfo();
  }, []);

  // 条件3: 配送情報がない場合は、配送情報ページに遷移
  useEffect(() => {
    if (!shippingInformation) {
      router.push("/shippinginformation");
    }
  }, [shippingInformation]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* 条件1: shippinginformationがtrueの場合はその値を1カードとして表示 */}
      {shippingInformation && (
        <div
          onClick={() => router.push("/shippinginformation")}
          className="border p-4 mb-4 cursor-pointer"
        >
          {/* 条件2: shippinginformationのカードをクリックするとshippinginformationページに遷移 */}
          <h2 className="text-xl mb-4">Shipping Information</h2>
          <p>{shippingInformation.address}</p>
          <p>{shippingInformation.city}</p>
          {/* 他の配送情報もここに表示 */}
        </div>
      )}

      {/* 条件4: cartに入ってる全てを並べる */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cartItems?.map((item, index) => (
          <div key={index} className="flex items-center my-4 p-4 border-b">
            <div className="w-1/4 mr-8">
              <Image
                src={"http://localhost:8000" + item.image_url}
                // src={item.image_url}
                alt={item.product.name}
                width={200}
                height={200}
              />
            </div>
            <div className="w-3/4 flex justify-between items-center">
              <div>
                <h2 className="text-xl">{item.product.name}</h2>
                <p className="mt-2 text-gray-600">数量: {item.quantity}</p>
                <p className="text-gray-600">
                  価格: ${item.product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xl mb-4">合計金額: ${totalPrice.toFixed(2)}</p>
      <button
        onClick={() => handleCheckout(Math.floor(totalPrice))}
        className="bg-blue-500 text-white px-4 py-2 mb-2 w-full"
      >
        注文を確定する
      </button>
      <button
        onClick={() => router.push("/cart")} // ここで適切なルートに戻るよう指定してください
        className="bg-gray-500 text-white px-4 py-2 w-full"
      >
        戻る
      </button>
    </div>
  );
}
