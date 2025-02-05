import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import ProductModal from "../../components/ProductModal";

function Products() {
  const [products, setProducts] = useState([]);
  const [productModal, setProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:3000/api/product");
      setProducts(res.data.products);
    };
    fetchProducts();
  }, []);

  const TodaysDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleRowClick = (product) => {
    setSelectedProduct(product);
    setProductModal(true);
  };

  return (
    <div className="bg-gray-900 flex flex-col gap-5 rounded-lg p-5 min-h-screen text-gray-300 min-w-full">
      <div className="text-4xl flex justify-center gap-20 items-center ">
        <h1>All Uploaded Products</h1>
        <Link
          className="bg-purple-900  p-2 rounded-lg hover:bg-purple-950"
          to={"/products/new"}
        >
          Post New Product
        </Link>
      </div>

      {/* Displaying the fetched data */}
      <Table>
        <TableCaption>
          A list of all products as per {TodaysDate()}
        </TableCaption>
        <TableHeader>
          <TableRow className="hover:bg-purple-900 border-b-purple-900">
            <TableHead className="w-[100px]">Cover Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Platform</TableHead>
            <TableHead className="text-right">Views</TableHead>
            <TableHead className="text-right">Category</TableHead>
            <TableHead className="text-right">Trailer</TableHead>
            <TableHead className="text-right">Sale</TableHead>
            <TableHead className="text-right">SalePrice</TableHead>
            <TableHead className="text-right">Stock</TableHead>
            <TableHead className="text-right">Featured</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product._id}
              onClick={() => handleRowClick(product)}
              key={product.productName}
              className="hover:bg-purple-600 border-b-purple-900 cursor-pointer hover:text-white"
            >
              <TableCell className="w-[100px]">
                <img
                  src={product.coverImage}
                  alt={product.productName}
                  className="w-16 h-16 object-cover"
                />
              </TableCell>
              <TableCell className="font-medium">{product.title}</TableCell>
              <TableCell>{product.type}</TableCell>
              <TableCell className="text-right">
                ${product.price.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">{product.platform}</TableCell>
              <TableCell className="text-right">{product.views}</TableCell>
              <TableCell className="text-right">{product.category}</TableCell>
              <TableCell className="text-right">
                <a
                  href={product.trailer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Watch
                </a>
              </TableCell>
              <TableCell className="text-right">
                {product.sale ? "Yes" : "No"}
              </TableCell>
              <TableCell className="text-right">
                {product.sale ? `$${product.salePrice.toFixed(2)}` : "N/A"}
              </TableCell>
              <TableCell className="text-right">{product.stock}</TableCell>
              <TableCell className="text-right">
                {product.featured ? "Yes" : "No"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal for displaying product details */}
      {productModal && selectedProduct && (
        <ProductModal
          products={products}
          selectedProduct={selectedProduct}
          setProductModal={setProductModal}
          setSelectedProduct={setSelectedProduct}
          setProducts={setProducts}
        />
      )}
    </div>
  );
}

export default Products;
