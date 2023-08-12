import { useState } from "react";
import cookie from "cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
function useWishlist() {
  const [wishlist, setWishlist] = useState([]);

  const router = useRouter();

  const fetchWishlist = () => {
    const cookies = cookie.parse(document.cookie);
    const access = cookies.access ?? false;
    if (access === false) {
      // alert("認証情報がありません。");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/wishlist/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setWishlist(data || []); // サーバーからの応答に合わせて適切に調整
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleHeartClick = (product) => {
    const cookies = cookie.parse(document.cookie);
    const access = cookies.access ?? false;
    if (access === false) {
      router.push("/login");
      return;
    }

    const isProductInWishlist = wishlist.some(
      (item) => item.product_id === product.id
    );

    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/wishlist/${
      isProductInWishlist ? "remove" : "add"
    }/${product.id}/`;

    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })
      .then(() => fetchWishlist()) // Update the wishlist
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return { wishlist, handleHeartClick, setWishlist };
}

export default useWishlist;
