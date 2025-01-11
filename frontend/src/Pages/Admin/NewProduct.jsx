import { useState } from "react";

function NewProduct() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
        <div className="flex justify-between flex-col items-center md:flex-row gap-10">
        <div className="flex gap-2 items-center ">
          <label className="text-2xl">Cover Image</label>
          <input
            className="bg-gray-700 focus:outline-purple-900 focus:outline-none w-72 rounded p-1"
            type="file"
            name="cover Image"
            value={formData.coverImage}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-2 items-center ">
          <label className="text-2xl">Name</label>
          <input
            className="bg-gray-700 focus:outline-purple-900 focus:outline-none w-72 rounded p-1"
            type="text"
            name="name"
            placeholder="FC 25"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        </div>

        <div className="flex justify-between gap-10 flex-col items-center md:flex-row">
        <div className="flex gap-5 items-center ">
          <label className="text-2xl">Type</label>
          <select
            className="bg-gray-700 focus:outline-purple-900 focus:outline-none w-72 rounded p-1"
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value={null}>Select Type</option>

            <option value="account">Account</option>
            <option value="code">Code</option>
          </select>
        </div>

        <div className="flex gap-5 items-center ">
          <label className="text-2xl">Price</label>
          <input
            className="bg-gray-700 focus:outline-purple-900 focus:outline-none w-72 rounded p-1"
            type="text"
            name="price"
            placeholder="999rs"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        </div>

        <div className="flex justify-between gap-10 flex-col items-center md:flex-row">
        <div className="flex gap-5 items-center ">
          <label className="text-2xl">Description</label>
          <textarea
            className="bg-gray-700 focus:outline-purple-900 focus:outline-none w-72 rounded p-1"
            type="text"
            name="description"
            placeholder="Blah Blah Blah"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex gap-5 items-center ">
          <label className="text-2xl">Category</label>
          <input
            className="bg-gray-700 focus:outline-purple-900 focus:outline-none w-72 rounded p-1"
            type="text"
            name="category"
            placeholder="Sports"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        </div>


        <div className="flex justify-between gap-10 flex-col items-center md:flex-row">
        <div className="flex gap-5 items-center ">
          <label className="text-2xl">Trailer</label>
          <input
            className="bg-gray-700 focus:outline-purple-900 focus:outline-none w-72 rounded p-1"
            type="text"
            name="trailer"
            placeholder="youtube.com/game"
            value={formData.trailer}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex gap-5 items-center ">
          <label className="text-2xl">Sale</label>
          <input
            className="bg-gray-700 focus:outline-purple-900 focus:outline-none w-72 rounded p-1"
            type="checkbox"
            name="onSale"
            placeholder="FC 25"
            value={formData.onSale}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        
        <div className="flex justify-between gap-10 flex-col items-center md:flex-row">
        <div className="flex gap-5 items-center ">
          <label className="text-2xl">Sale Price</label>
          <input
            className="bg-gray-700 focus:outline-purple-900 focus:outline-none w-72 rounded p-1"
            type="text"
            name="salePrice"
            placeholder="Discounted Price"
            value={formData.salePrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex gap-5 items-center ">
          <label className="text-2xl">Stock</label>
          <input
            className="bg-gray-700 focus:outline-purple-900 focus:outline-none w-72 rounded p-1"
            type="text"
            name="stock"
            placeholder="3"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>
        </div>

        <div className="flex justify-between gap-10 flex-col items-center md:flex-row">

        <div className="flex gap-5 items-center ">
          <label className="text-2xl">Platform</label>
          <select
            className="bg-gray-700 focus:outline-purple-900 focus:outline-none w-72 rounded p-1"
            type="text"
            name="platform"
            placeholder="FC 25"
            value={formData.platform}
            onChange={handleChange}
            required
          > 
          <option value={null}>Select Platform</option>
          <option value="pc">steam</option>
          <option value="xbox">xbox</option>
          <option value="playstation">playstation</option>
            </select>
        </div>

        <div className="flex gap-5 items-center ">
          <label className="text-2xl">Featured</label>
          <input
            className="bg-gray-700 focus:outline-purple-900 focus:outline-none w-72 rounded p-1"
            type="checkbox"
            name="featured"
            placeholder="FC 25"
            value={formData.featured}
            onChange={handleChange}
            required
          />
        </div>
        </div>

        <button className="w-28 h-16 bg-purple-900 rounded-lg" type="submit">Upload</button>
      </form>
    </div>
  );
}

export default NewProduct;
