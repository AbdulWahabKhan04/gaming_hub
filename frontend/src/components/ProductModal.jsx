import axios from "axios";
import { useState } from "react";

function ProductModal({
  selectedProduct,
  setProductModal,
  setSelectedProduct,
  setProducts,
  products,
}) {
  const [formData,setFormData] = useState({}) 
    const closeModal = () => {
    setProductModal(false);
    setSelectedProduct(null);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/product/${id}`);
      setProducts(products.filter((product) => product._id !== id));
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };
  const updateProduct = async (id) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/product/${id}`,formData);
      console.log(res)
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-5 rounded-lg max-w-2xl w-full">
        <form
          className="flex flex-col gap-5 mt-10 items-center"
          onSubmit={(e) => {e.preventDefault();}}
        >
          <img src={selectedProduct.coverImage} alt="Product Image" className="w-full h-96 object-cover rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <div className="flex items-center gap-4">
              <label className="text-2xl w-32">Cover Image</label>
              <input
                className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
                type="text"
                name="coverImage"
                defaultValue={selectedProduct.coverImage}
                placeholder="https://example.com/image.jpg"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="text-2xl w-32">Title</label>
              <input
                className="bg-gray-700 focus:outline-purple-900 focus:outline-none flex-1 rounded p-1"
                type="text"
                name="title"
                placeholder="FC 25"
                defaultValue={selectedProduct.title}
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
                defaultValue={selectedProduct.type}
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
                defaultValue={selectedProduct.price}
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
                defaultValue={selectedProduct.description}
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
                defaultValue={selectedProduct.category}
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
                defaultValue={selectedProduct.trailer}
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
                defaultChecked={selectedProduct.onSale || false}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Animated Section */}
          <div
            className={`transition-all  duration-500 ease-in-out overflow-hidden ${
              selectedProduct.onSale ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
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
                defaultValue={selectedProduct.stock}
                onChange={handleChange}
                
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
                defaultValue={selectedProduct.platform}
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
                defaultChecked={selectedProduct.featured || false}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex gap-5">
            <button
              onClick={() => updateProduct(selectedProduct._id)}
              className="mt-4 bg-purple-900 p-2 rounded-lg hover:bg-purple-950"
            >
              Update
            </button>

            <button
              onClick={() => deleteProduct(selectedProduct._id)}
              className="mt-4 bg-red-700 p-2 rounded-lg hover:bg-purple-950"
            >
              Delete
            </button>
            <button
              onClick={closeModal}
              className="mt-4 bg-purple-900 p-2 rounded-lg hover:bg-purple-950"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductModal;
