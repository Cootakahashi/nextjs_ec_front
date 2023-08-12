import cookie from "cookie";
import { loadStripe } from "@stripe/stripe-js";

const handleCheckout = async (price) => {
  const cookies = cookie.parse(document.cookie);
  const access = cookies.access ?? false;
  const formattedPrice = price;

  // const formattedPrice = product.price;
  console.log("Total price:", formattedPrice);

  if (access === false) {
    alert("認証情報がありません。");
    return;
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/create-checkout-session/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access}`,
        },
        body: JSON.stringify({ totalPrice: formattedPrice }),
      }
    );
    if (response.ok) {
      // ...
      console.log(response);
    } else {
      const errorText = await response.text();
      console.error("Error creating checkout session:", errorText);
    }

    const session = await response.json();
    console.log("Session ID:", session.id);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (error) {
        console.error(error);
      }
    }
  } catch (error) {
    console.error(error);
  }
};
export default handleCheckout;
