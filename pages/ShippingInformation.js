import { useState, useEffect } from "react";
import cookie from "cookie";

export default function ShippingInformation() {
  const [info, setInfo] = useState({
    address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
  });

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
        setInfo(data); // 既存情報をstateにセット
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShippingInfo(); // このページがロードされたときに情報を取得
  }, []);

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = info.id ? "PUT" : "POST"; // IDがあれば更新、なければ作成
    console.log(method);
    console.log(e);
    console.log(info);
    const cookies = cookie.parse(document.cookie);
    const access = cookies.access ?? false;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/shipping-information/`,
      {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access}`,
        },
        body: JSON.stringify(info),
      }
    );

    if (response.ok) {
      alert("Shipping information saved successfully!");
    } else {
      alert("Failed to save shipping information.");
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label
            htmlFor="address"
            className="block text-grey-darker text-sm font-bold mb-2"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            name="address"
            type="text"
            value={info.address}
            onChange={handleChange}
          />
        </div>
        {/* 各フィールドの情報をここに追加 */}
        <div>
          <label
            htmlFor="city"
            className="block text-grey-darker text-sm font-bold mb-2"
          >
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            name="city"
            type="text"
            value={info.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-grey-darker text-sm font-bold mb-2"
          >
            State
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            name="state"
            type="text"
            value={info.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="postal_code"
            className="block text-grey-darker text-sm font-bold mb-2"
          >
            Postal_code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            name="postal_code"
            type="text"
            value={info.postal_code}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-grey-darker text-sm font-bold mb-2"
          >
            Country
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            name="country"
            type="text"
            value={info.country}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:col-span-2"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}
