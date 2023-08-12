import { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   const response = await axios.post("/api/profile", formData);
      //   console.log("Profile updated:", response.data);
    } catch (error) {
      console.error("An error occurred while updating the profile:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">配送先</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-lg font-medium">
            postalCode
          </label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={formData.address}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-lg font-medium">
            City
          </label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={formData.address}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-lg font-medium">
            Address
          </label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={formData.address}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-lg font-medium">
            Phone number
          </label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={formData.address}
            className="border p-2 rounded-md"
          />
        </div>
        {/* 他のフィールドも同様にここに追加 */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
