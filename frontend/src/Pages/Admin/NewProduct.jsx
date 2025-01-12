import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function NewProduct() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      toast("On It!", {
        icon: "⏳",
      });
      const res = await axios.post(
        "http://localhost:3000/api/product/createProduct",
        formData
      );
      console.log(formData)
      if (res.status == 201) {
        toast.success("Product created successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error creating product!");
    }
  };

  return (
    <div className="text-white max-w-6xl mx-auto p-10">
      <h1 className="text-4xl border-b-2 border-purple-700 w-max p-2 mx-auto ">
        Post new Product
      </h1>

      {/* Form fields */}
      <form
        className="flex flex-col gap-10 mt-10 items-center"
        onSubmit={handleSubmit}
      >
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          <div className="flex items-center gap-4">
            <label className="text-2xl w-32">Cover Image</label>
            <input
              className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
              type="text"
              name="coverImage"
              placeholder="https://example.com/image.jpg"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="text-2xl w-32">Name</label>
            <input
              className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
              type="text"
              name="name"
              placeholder="FC 25"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          <div className="flex items-center gap-4">
            <label className="text-2xl w-32">Type</label>
            <select
              className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="account">Account</option>
              <option value="code">Code</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label className="text-2xl w-32">Price</label>
            <input
              className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
              type="text"
              name="price"
              placeholder="999rs"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          <div className="flex items-center gap-4">
            <label className="text-2xl w-32">Description</label>
            <textarea
              className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
              name="description"
              placeholder="Blah Blah Blah"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="text-2xl w-32">Category</label>
            <input
              className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
              type="text"
              name="category"
              placeholder="Sports"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          <div className="flex items-center gap-4">
            <label className="text-2xl w-32">Trailer</label>
            <input
              className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
              type="text"
              name="trailer"
              placeholder="youtube.com/game"
              value={formData.trailer}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="text-2xl w-32">Sale</label>
            <input
              className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
              type="checkbox"
              name="onSale"
              checked={formData.onSale || false}
              onChange={handleChange}
            />
          </div>
        </div>
          {/* Animated Section */}
          <div
            className={`transition-all  duration-500 ease-in-out overflow-hidden ${
              formData.onSale ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex items-center gap-4">
              <label className="text-2xl w-32">Sale Expiry</label>
              <input
                className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
                type="datetime-local"
                name="saleExpiry"
                value={formData.saleExpiry || ""}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-4 mt-4">
              <label className="text-2xl w-32">Sale Price</label>
              <input
                className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
                type="text"
                name="salePrice"
                placeholder="Discounted Price"
                value={formData.salePrice || ""}
                onChange={handleChange}
                required={formData.onSale}
              />
            </div>
          </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          <div className="flex items-center gap-4">
            <label className="text-2xl w-32">Stock</label>
            <input
              className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
              type="text"
              name="stock"
              placeholder="3"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          <div className="flex items-center gap-4">
            <label className="text-2xl w-32">Platform</label>
            <select
              className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
              name="platform"
              value={formData.platform}
              onChange={handleChange}
              required
            >
              <option value="">Select Platform</option>
              <option value="pc">Steam</option>
              <option value="xbox">Xbox</option>
              <option value="playstation">PlayStation</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label className="text-2xl w-32">Featured</label>
            <input
              className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
              type="checkbox"
              name="featured"
              checked={formData.featured || false}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-32 h-12 bg-purple-900 rounded-lg"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default NewProduct;
